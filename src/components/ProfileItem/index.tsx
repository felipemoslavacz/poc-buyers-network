import { ProfileItemContainer, Image } from "./styled";

interface IProfileItem {
  title: string;
  location: string;
  description: string;
}

const ProfileItem = ({ title, location, description }: IProfileItem) => (
  <ProfileItemContainer>
    <Image />
    <div>
      <h3>{title}</h3>
      <p>{location}</p>
      <p>{description}</p>
      <a href="#">View Profile ›</a>
    </div>
  </ProfileItemContainer>
);

export default ProfileItem;
