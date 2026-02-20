import "./styles/global.css";
import "./styles/theme.css";

import { StopCircle } from "lucide-react";
import { useState } from "react";
import BoxContainer from "./components/BoxContainer";
import Button from "./components/Button";
import CountDown from "./components/CountDown";
import Cycles from "./components/Cycles";
import Input from "./components/Input";
import LogoTimer from "./components/LogoTimer";
import Menu from "./components/Menu";
import Footer from "./components/layout/Footer";

function App() {
  const [buttonColor, setButtonColor] = useState<"primary" | "error">(
    "primary"
  );
  function handleClick() {
    buttonColor === "primary"
      ? setButtonColor("error")
      : setButtonColor("primary");
  }
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
        <form className="formGroup">
          <Input id="taskIn" label="Task" placeholder="Digite sua task" />
          <div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <Cycles />
          <div>
            <Button type="button" variant={buttonColor} onClick={handleClick}>
              <StopCircle />
            </Button>
          </div>
        </form>
      </BoxContainer>
      <BoxContainer textId="footer">
        <Footer />
      </BoxContainer>
    </>
  );
}

export default App;
