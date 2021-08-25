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
        coordinates: [-71.481167, 41.362865],
      },
      properties: {
        title: "Point Judith Kelp Company",
        location: "1460 Ocean Rd, Narragansett, RI 02882",
        description: "Species: Sugar Kelp, Hijiki, Irish Moss",
      },
    },
    {
      id: 2,
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-69.951307, 41.688419],
      },
      properties: {
        title: "Chatham Kelp",
        location: "45 Barcliff Ave, Chatham, MA 02633",
        description: "Species: Sugar Kelp",
      },
    },
    {
      id: 3,
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-71.3857768, 41.5099226],
      },
      properties: {
        title: "Ocean State Oysters",
        location: "Jamestown, Rhode Island, USA",
        description: "Species: Oysters",
      },
    },
    {
      id: 4,
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-72.363851, 41.09771],
      },
      properties: {
        title: "Widow's Hole Oyster Farm",
        location: "307 Flint St., Greenport NY 11944",
        description: "Species: Oyster",
      },
    },
    {
      id: 5,
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-71.484931, 41.430386],
      },
      properties: {
        title: "Rhody Wild Sea Gardens",
        location: "91 Point Judith Road",
        description: "Species: Sugar Kelp",
      },
    },
    {
      id: 6,
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-71.557765, 41.172034],
      },
      properties: {
        title: "Block Island Kelp",
        location: "17 Water St, New Shoreham, RI 02807",
        description: "Species: Sugar Kelp",
      },
    },
    {
      id: 7,
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-72.738692, 40.805322],
      },
      properties: {
        title: "Great Gun Oysters",
        location: "32 Driftwood Lane East Moriches, NY 11940",
        description: "Species: Oysters",
      },
    },
  ],
};

export default geojson;
