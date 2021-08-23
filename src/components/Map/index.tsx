import { useEffect } from "react";
import ReactMapGL, {
  Marker,
  NavigationControl,
  Popup,
  WebMercatorViewport,
} from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import { useMap } from "../../hooks/useMap";

import { ReactComponent as PinDefault } from "../../assets/mapbox-marker-icon-gray.svg";
import { ReactComponent as PinSelected } from "../../assets/mapbox-marker-icon-green.svg";

import { MapContainer } from "./styled";

const navControlStyle = {
  right: 10,
  top: 10,
};

const MAX_BOUNDS = [
  [-82.7778, 37.07214], // New York
  [-65.32614, 48.09228], // Maine,
];

const Map = () => {
  const { viewport, setViewport, geojson, selectedMarker, setSelectedMarker } =
    useMap();

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMarker(null);
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isOutOfMaxBounds = (
    nextSW: number[],
    nextNE: number[],
    maxBounds: number[][]
  ) => {
    const [[maxSWLng, maxSWLat], [maxNELng, maxNELat]] = maxBounds;
    const [nextSWLng, nextSWLat] = nextSW;
    const [nextNELng, nextNELat] = nextNE;

    return (
      nextSWLng < maxSWLng ||
      nextSWLat < maxSWLat ||
      nextNELng > maxNELng ||
      nextNELat > maxNELat
    );
  };

  const onViewportChange = (newViewport: any) => {
    const merc = new WebMercatorViewport(newViewport);
    // fetch the lat/lng of the edges of the viewport
    // measured from topLeft
    const newSouthWest = merc.unproject([0, newViewport.height]);
    const newNorthEast = merc.unproject([newViewport.width, 0]);
    if (!isOutOfMaxBounds(newSouthWest, newNorthEast, MAX_BOUNDS)) {
      setViewport(newViewport);
    }
  };

  return (
    <MapContainer>
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/light-v10"
        onViewportChange={(viewport: any) => onViewportChange(viewport)}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        <NavigationControl showCompass={false} style={navControlStyle} />
        {geojson.features.map((feature) => (
          <Marker
            key={feature.id}
            latitude={feature.geometry.coordinates[1]}
            longitude={feature.geometry.coordinates[0]}
          >
            <button onClick={() => setSelectedMarker(feature)}>
              {selectedMarker?.id !== feature.id ? (
                <PinDefault />
              ) : (
                <PinSelected />
              )}
            </button>
          </Marker>
        ))}

        {selectedMarker && (
          <Popup
            latitude={selectedMarker.geometry.coordinates[1]}
            longitude={selectedMarker.geometry.coordinates[0]}
            onClose={() => setSelectedMarker(null)}
          >
            <h3>{selectedMarker.properties.title}</h3>
            <p>{selectedMarker.properties.location}</p>
            <p>{selectedMarker.properties.description}</p>
          </Popup>
        )}
      </ReactMapGL>
    </MapContainer>
  );
};

export default Map;
