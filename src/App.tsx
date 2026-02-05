import "./styles/global.css";
import "./styles/theme.css";

import BoxContainer from "./components/BoxContainer";
import CountDown from "./components/CountDown";
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
      <BoxContainer textId="count">
        <CountDown />
      </BoxContainer>
      <BoxContainer textId="form">
        <form className="">
          <div></div>
        </form>
      </BoxContainer>
    </>
  );
}

export default App;
