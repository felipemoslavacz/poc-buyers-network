import { Header, Map, ProfilePanel } from "./components";

import { Wrapper, Main } from "./App.styled";

import { MapProvider } from "./hooks/useMap";

const App = () => {
  return (
    <Wrapper>
      <MapProvider>
        <Header />
        <Main>
          <Map />
          <ProfilePanel />
        </Main>
      </MapProvider>
    </Wrapper>
  );
};

export default App;
