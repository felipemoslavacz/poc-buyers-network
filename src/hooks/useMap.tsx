import { createContext, ReactNode, useContext, useState } from "react";

import { FlyToInterpolator } from "react-map-gl";

import geojson, { IGeoJson, IFeatures } from "../services/geojson";

import mapboxgl from "mapbox-gl";

// @ts-ignore
mapboxgl.workerClass =
  // eslint-disable-next-line import/no-webpack-loader-syntax
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

interface IViewport {
  latitude?: number;
  longitude?: number;
  zoom: number;
  transitionDuration?: number;
  transitionInterpolator?: any;
  transitionEasing?: Function;
}

interface IMapProvider {
  children: ReactNode;
}

export interface MapContextData {
  viewport: IViewport;
  setViewport: React.Dispatch<React.SetStateAction<IViewport>>;
  geojson: IGeoJson;
  selectedMarker: IFeatures | null;
  setSelectedMarker: React.Dispatch<React.SetStateAction<IFeatures | null>>;
  handleFlyToInterpolator: Function;
}

const MapContext = createContext({} as MapContextData);

export function MapProvider({ children }: IMapProvider) {
  const map = useProviderMap();
  return <MapContext.Provider value={map}>{children}</MapContext.Provider>;
}

export function useMap() {
  return useContext(MapContext);
}

function useProviderMap() {
  const [viewport, setViewport] = useState<IViewport>({
    latitude: 42.8107476,
    longitude: -74.2801068,
    zoom: 5,
  });
  const [selectedMarker, setSelectedMarker] = useState<IFeatures | null>(null);

  function handleFlyToInterpolator(feature: IFeatures) {
    setViewport({
      ...viewport,
      longitude: feature?.geometry.coordinates[0],
      latitude: feature?.geometry.coordinates[1],
      zoom: 8,
      transitionDuration: 1000,
      transitionInterpolator: new FlyToInterpolator({ speed: 2 }),
    });
  }

  return {
    viewport,
    setViewport,
    geojson,
    selectedMarker,
    setSelectedMarker,
    handleFlyToInterpolator,
  };
}
