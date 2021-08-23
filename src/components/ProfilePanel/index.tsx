import ProfileItem from "../ProfileItem";

import { useMap } from "../../hooks/useMap";

import { ProfileContainer } from "./styled";

const ProfilePanel = () => {
  const { geojson } = useMap();
  return (
    <ProfileContainer>
      {geojson.farmers.map(
        ({ properties: { title, location, description } }) => {
          return (
            <ProfileItem
              title={title}
              location={location}
              description={description}
            />
          );
        }
      )}
    </ProfileContainer>
  );
};

export default ProfilePanel;
