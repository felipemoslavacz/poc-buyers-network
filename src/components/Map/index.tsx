import { useRef, useState, useEffect } from "react";
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl, { Map as MapTypes } from "!mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import geojson from "./geojson";

import { MapContainer } from "./styled";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ3JlZW53YXZlIiwiYSI6ImNrczY5YnVkZTE0dXoydm9kODg5djlyZWYifQ.DeQaYuUEKlS92-CIhV30AA";

const Map = () => {
  const mapContainer = useRef(null);
  // {lng: -71.02044964780625, lat: 42.998050130933336}
  const map = useRef<MapTypes | null>(null);
  const [lng, setLng] = useState(-72.02);
  const [lat, setLat] = useState(42.998);
  const [zoom, setZoom] = useState(6);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.addControl(new mapboxgl.NavigationControl());

    geojson.features.forEach(function (marker) {
      if (!map.current) return;

      const el = document.createElement("div");
      el.className = "marker";

      new mapboxgl.Marker({
        color: "#565656",
        scale: 1,
      })
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

  return (
    <MapContainer>
      <div ref={mapContainer} className="map-container" />
    </MapContainer>
  );
};

export default Map;
