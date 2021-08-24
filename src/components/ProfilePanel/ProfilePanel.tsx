import { useMap } from "../../hooks/useMap";

import { ProfileItem } from "../index";
import { ProfileContainer } from "./ProfilePanel.styled";

const ProfilePanel = () => {
  const {
    profiles,
    selectedMarker,
    setSelectedMarker,
    handleFlyToInterpolator,
  } = useMap();

  return (
    <ProfileContainer>
      {profiles.features.map((feature) => {
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
              handleFlyToInterpolator(feature);
            }}
          />
        );
      })}
    </ProfileContainer>
  );
};

export default ProfilePanel;
