import { useMap } from "../../hooks/useMap";

import { ProfileItem } from "../index";
import { ProfileContainer, ButtonResults } from "./ProfilePanel.styled";

const ProfilePanel = () => {
  const {
    profiles,
    selectedMarker,
    setSelectedMarker,
    handleFlyToInterpolator,
  } = useMap();

  function resetMap() {
    const coordinates = [-71.40086692940942, 41.31003121981365];
    handleFlyToInterpolator(coordinates, 7);
  }

  return (
    <ProfileContainer>
      <ButtonResults onClick={() => resetMap()}>Show all results</ButtonResults>
      {profiles.features.length > 0 ? (
        profiles.features.map((feature) => {
          const {
            id,
            properties: { title, location, description },
          } = feature;
          return (
            <ProfileItem
              key={id}
              title={title}
              location={location}
              description={description}
              active={selectedMarker?.id === id ? "active" : ""}
              onClick={() => {
                setSelectedMarker(feature);
                handleFlyToInterpolator(feature.geometry.coordinates);
              }}
            />
          );
        })
      ) : (
        <h5>Cannot find farmer profiles.</h5>
      )}
    </ProfileContainer>
  );
};

export default ProfilePanel;
