import ProfileItem from "../ProfileItem";

import { ProfileContainer } from "./styled";

import geojson from "../Map/geojson";

const ProfilePanel = () => {
  return (
    <ProfileContainer>
      {geojson.features.map(
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
