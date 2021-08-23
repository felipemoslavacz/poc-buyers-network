import { Header, Map, ProfilePanel } from "./components";

import { Wrapper, Main } from "./App.styled";

import { MapProvider } from "./hooks/useMap";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <MapProvider>
          <Map />
          <ProfilePanel />
        </MapProvider>
      </Main>
    </Wrapper>
  );
};

export default App;
