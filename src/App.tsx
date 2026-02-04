import "./styles/global.css";
import "./styles/theme.css";

import BoxContainer from "./components/BoxContainer";
import LogoTimer from "./components/LogoTimer";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <BoxContainer textId="header">
        <LogoTimer />
      </BoxContainer>
      <BoxContainer textId="menu">
        <Menu />
      </BoxContainer>
    </>
  );
}

export default App;
