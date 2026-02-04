import "./styles/global.css";
import "./styles/theme.css";

import BoxContainer from "./components/BoxContainer";
import LogoTimer from "./components/LogoTimer";
import Menu from "./components/Menu";
import CountDown from "./components/CountDown";

function App() {
  return (
    <>
      <BoxContainer textId="header">
        <LogoTimer />
      </BoxContainer>
      <BoxContainer textId="menu">
        <Menu />
      </BoxContainer>
      <BoxContainer textId="count">
        <CountDown />
      </BoxContainer>
    </>
  );
}

export default App;
