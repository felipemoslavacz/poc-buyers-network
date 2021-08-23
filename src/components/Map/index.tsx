import { useMap } from "../../hooks/useMap";

import { MapContainer } from "./styled";

const Map = () => {
  const { mapContainer } = useMap();
  return (
    <MapContainer>
      <div ref={mapContainer} className="map-container" />
    </MapContainer>
  );
};

export default Map;
