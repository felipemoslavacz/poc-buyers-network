import { ProfileItemContainer, Image } from "./ProfileItem.styled";

import { ReactComponent as LocationIcon } from "../../assets/location.svg";

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
        <p>
          <LocationIcon />
          {location}
        </p>
        <p>{description}</p>
        <button>View Profile ›</button>
      </div>
    </ProfileItemContainer>
  );
};

export default ProfileItem;
