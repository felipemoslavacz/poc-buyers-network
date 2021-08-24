import { ReactComponent as GreenwaveLogo } from "../../assets/logo.svg";

import { HeaderContainer, Logo, Title, TitleContainer } from "./Header.styled";

import { Filter } from "../index";

const Header = () => (
  <>
    <HeaderContainer>
      <Logo>
        <GreenwaveLogo />
      </Logo>
    </HeaderContainer>
    <TitleContainer>
      <Title>Buyer’s Network</Title>
      <Filter />
    </TitleContainer>
  </>
);

export default Header;
