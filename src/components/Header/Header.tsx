import { ReactComponent as GreenwaveLogo } from "../../assets/logo.svg";

import { HeaderContainer, Logo, Title, TitleContainer } from "./Header.styled";

const Header = () => (
  <>
    <HeaderContainer>
      <Logo>
        <GreenwaveLogo />
      </Logo>
    </HeaderContainer>
    <TitleContainer>
      <Title>Buyer’s Network</Title>
    </TitleContainer>
  </>
);

export default Header;
