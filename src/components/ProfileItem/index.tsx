import { ProfileItemContainer, Image } from "./styled";

interface IProfileItem {
  title: string;
  location: string;
  description: string;
  active: string;
  onClick: React.MouseEventHandler;
}

const ProfileItem = ({
  title,
  location,
  description,
  active,
  onClick,
}: IProfileItem) => {
  return (
    <ProfileItemContainer className={active} onClick={onClick}>
      <Image />
      <div>
        <h3>{title}</h3>
        <p>{location}</p>
        <p>{description}</p>
        <a href="#">View Profile ›</a>
      </div>
    </ProfileItemContainer>
  );
};

export default ProfileItem;
