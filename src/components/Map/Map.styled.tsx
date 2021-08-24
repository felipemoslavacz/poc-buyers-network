import styled from "styled-components";

export const MapContainer = styled.div`
  flex-basis: 68%;

  button {
    background: transparent;
    border: none;
    outline: none;
  }

  .map-container {
    height: 100%;
  }

  .mapboxgl-popup {
    max-width: 200px;
  }

  .mapboxgl-popup-content {
    color: #585858;
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    line-height: 0.5;

    h3 {
      font-size: 12px;
    }

    a {
      color: #337cff;
      text-decoration: none;
    }
  }
`;
