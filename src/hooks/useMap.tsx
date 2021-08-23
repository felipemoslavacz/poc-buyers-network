import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
  MutableRefObject,
} from "react";

import mapboxgl, { Map as MapTypes } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import geojson, { IGeoJson } from "../services/geojson";

import { MARKER_OPTIONS, MAX_BOUNDS } from "../config";

interface IMapProvider {
  children: ReactNode;
}

interface MapContextData {
  mapContainer: MutableRefObject<HTMLDivElement | null>;
  geojson: IGeoJson;
}

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ3JlZW53YXZlIiwiYSI6ImNrczY5YnVkZTE0dXoydm9kODg5djlyZWYifQ.DeQaYuUEKlS92-CIhV30AA";

const MapContext = createContext({} as MapContextData);

export function MapProvider({ children }: IMapProvider) {
  const map = useProviderMap();
  return <MapContext.Provider value={map}>{children}</MapContext.Provider>;
}

export function useMap() {
  return useContext(MapContext);
}

function useProviderMap() {
  const mapContainer = useRef(null);
  const map = useRef<MapTypes | null>(null);
  const [lng, setLng] = useState(-74.28);
  const [lat, setLat] = useState(42.811);
  const [zoom, setZoom] = useState(5);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [lng, lat],
      zoom: zoom,
      maxBounds: MAX_BOUNDS,
    });
    map.current.addControl(new mapboxgl.NavigationControl());

    geojson.farmers.forEach(function (marker) {
      if (!map.current) return;

      new mapboxgl.Marker(MARKER_OPTIONS)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              `<h3>${marker.properties.title}</h3>
              <p>${marker.properties.location}</p>
              <p>${marker.properties.description}</p>
              <a href="#">View Profile ></a>`
            )
        )
        .addTo(map.current);
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      if (map.current === null) return;
      setLng(Number(map.current.getCenter().lng.toFixed(4)));
      setLat(Number(map.current.getCenter().lat.toFixed(4)));
      setZoom(Number(map.current.getZoom().toFixed(2)));
    });
  });

  return {
    mapContainer,
    geojson,
  };
}
