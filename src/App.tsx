import { Header, Map, ProfilesPanel } from "./components";

import { Wrapper, Main } from "./App.styled";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Map />
        <ProfilesPanel />
      </Main>
    </Wrapper>
  );
};

export default App;
