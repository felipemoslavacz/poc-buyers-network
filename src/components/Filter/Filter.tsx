import { FilterContainer, Select, Label } from "./Filter.styled";

import { useMap } from "../../hooks/useMap";

const STATES = [
  {
    id: "CT",
    label: "Connecticut",
    coordinates: [-72.7342163, 41.6500201],
  },
  {
    id: "MA",
    label: "Massachusetts",
    coordinates: [-72.032366, 42.3788774],
  },
  {
    id: "NH",
    label: "New Hampshire",
    coordinates: [-71.6553992, 43.4849133],
  },
  {
    id: "NY",
    label: "New York",
    coordinates: [-74.0060152, 40.7127281],
    zoom: 7,
  },
  {
    id: "RI",
    label: "Rhode Island",
    coordinates: [-71.5992372, 41.7962409],
  },
];

const Filter = () => {
  const { handleFlyToInterpolator, setSelectedMarker } = useMap();
  return (
    <FilterContainer>
      <Label>Sort By State:</Label>
      <Select
        onChange={(e) => {
          const state = STATES.find((state) => state.id === e.target.value);
          let zoom = state?.zoom ?? 8;
          let coordinates = state?.coordinates;

          if (!coordinates) {
            coordinates = [-74.2801068, 42.8107476];
            zoom = 5;
          }
          setSelectedMarker(null);
          handleFlyToInterpolator(coordinates, zoom);
        }}
      >
        <option value="">Please select</option>
        {STATES.map(({ id, label }) => (
          <option key={id} value={id}>
            {label}
          </option>
        ))}
      </Select>
    </FilterContainer>
  );
};

export default Filter;
