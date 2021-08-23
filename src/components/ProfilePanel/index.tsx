import ProfileItem from "../ProfileItem";

import { useMap } from "../../hooks/useMap";

import { ProfileContainer } from "./styled";

const ProfilePanel = () => {
  const {
    geojson,
    selectedMarker,
    setSelectedMarker,
    handleFlyToInterpolator,
  } = useMap();

  return (
    <ProfileContainer>
      {geojson.features.map((feature) => {
        const {
          id,
          properties: { title, location, description },
        } = feature;
        return (
          <ProfileItem
            title={title}
            location={location}
            description={description}
            active={selectedMarker?.id === id ? "active" : ""}
            onClick={() => {
              setSelectedMarker(feature);
              handleFlyToInterpolator(feature);
            }}
          />
        );
      })}
    </ProfileContainer>
  );
};

export default ProfilePanel;
