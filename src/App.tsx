import { Header, Map, ProfilePanel } from "./components";

import { Wrapper, Main } from "./App.styled";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Map />
        <ProfilePanel />
      </Main>
    </Wrapper>
  );
};

export default App;
