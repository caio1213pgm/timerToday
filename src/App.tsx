import BoxContainer from "./components/BoxContainer";
import CountDown from "./components/CountDown";
import FormAddTask from "./components/Forms/FormAddTask";
import "./styles/global.css";
import "./styles/theme.css";
import DefaultTemplate from "./template/DefaultTemplate";

function App() {
  return (
    <>
      <DefaultTemplate>
        <BoxContainer textId="count">
          <CountDown />
        </BoxContainer>
        <BoxContainer textId="form">
          <FormAddTask />
        </BoxContainer>
      </DefaultTemplate>
    </>
  );
}

export default App;
