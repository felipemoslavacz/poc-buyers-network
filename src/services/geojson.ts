export interface IFeatures {
  id: number;
  type: string;
  geometry: {
    type: string;
    coordinates: number[];
  };
  properties: {
    title: string;
    location: string;
    description: string;
  };
}

export interface IGeoJson {
  type: string;
  features: IFeatures[];
}

const geojson: IGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      id: 1,
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-71.967, 41.395],
      },
      properties: {
        title: "Name of Farmer/Farm 1",
        location: "Location",
        description: "Type of Species: name, name",
      },
    },
    {
      id: 2,
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-71.659, 41.459],
      },
      properties: {
        title: "Name of Farmer/Farm 2",
        location: "Location",
        description: "Type of Species: name, name",
      },
    },
    {
      id: 3,
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-70.819, 41.677],
      },
      properties: {
        title: "Name of Farmer/Farm 3",
        location: "Location",
        description: "Type of Species: name, name",
      },
    },
    {
      id: 4,
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-70.425, 41.69],
      },
      properties: {
        title: "Name of Farmer/Farm 4",
        location: "Location",
        description: "Type of Species: name, name",
      },
    },
    {
      id: 5,
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-70.682, 41.984],
      },
      properties: {
        title: "Name of Farmer/Farm 5",
        location: "Location",
        description: "Type of Species: name, name",
      },
    },
    {
      id: 6,
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-70.777, 42.64],
      },
      properties: {
        title: "Name of Farmer/Farm 6",
        location: "Location",
        description: "Type of Species: name, name",
      },
    },
    {
      id: 7,
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-70.76, 43.08],
      },
      properties: {
        title: "Name of Farmer/Farm 7",
        location: "Location",
        description: "Type of Species: name, name",
      },
    },
    {
      id: 8,
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-69.234, 44.074],
      },
      properties: {
        title: "Name of Farmer/Farm 8",
        location: "Location",
        description: "Type of Species: name, name",
      },
    },
    {
      id: 9,
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-69.182, 44.135],
      },
      properties: {
        title: "Name of Farmer/Farm 9",
        location: "Location",
        description: "Type of Species: name, name",
      },
    },
    {
      id: 10,
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-68.926, 44.463],
      },
      properties: {
        title: "Name of Farmer/Farm 10",
        location: "Location",
        description: "Type of Species: name, name",
      },
    },
  ],
};

export default geojson;
