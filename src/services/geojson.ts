import { LngLatLike } from "mapbox-gl";

interface IFarmers {
  type: string;
  geometry: {
    type: string;
    coordinates: LngLatLike;
  };
  properties: {
    title: string;
    location: string;
    description: string;
  };
}

export interface IGeoJson {
  type: string;
  farmers: IFarmers[];
}

const geojson: IGeoJson = {
  type: "FeatureCollection",
  farmers: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-71.967, 41.395],
      },
      properties: {
        title: "Name of Farmer/Farm",
        location: "Location",
        description: "Type of Species: name, name",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-71.659, 41.459],
      },
      properties: {
        title: "Name of Farmer/Farm",
        location: "Location",
        description: "Type of Species: name, name",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-70.819, 41.677],
      },
      properties: {
        title: "Name of Farmer/Farm",
        location: "Location",
        description: "Type of Species: name, name",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-70.425, 41.69],
      },
      properties: {
        title: "Name of Farmer/Farm",
        location: "Location",
        description: "Type of Species: name, name",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-70.682, 41.984],
      },
      properties: {
        title: "Name of Farmer/Farm",
        location: "Location",
        description: "Type of Species: name, name",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-70.777, 42.64],
      },
      properties: {
        title: "Name of Farmer/Farm",
        location: "Location",
        description: "Type of Species: name, name",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-70.76, 43.08],
      },
      properties: {
        title: "Name of Farmer/Farm",
        location: "Location",
        description: "Type of Species: name, name",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-69.234, 44.074],
      },
      properties: {
        title: "Name of Farmer/Farm",
        location: "Location",
        description: "Type of Species: name, name",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-69.182, 44.135],
      },
      properties: {
        title: "Name of Farmer/Farm",
        location: "Location",
        description: "Type of Species: name, name",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-68.926, 44.463],
      },
      properties: {
        title: "Name of Farmer/Farm",
        location: "Location",
        description: "Type of Species: name, name",
      },
    },
  ],
};

export default geojson;
