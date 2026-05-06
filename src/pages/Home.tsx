import CountDown from "../components/CountDown";
import FormAddTask from "../components/Forms/FormAddTask";
import BoxContainer from "../components/ui/BoxContainer";
import DefaultTemplate from "../template/DefaultTemplate";

export default function Home() {
  return (
    <DefaultTemplate>
      <BoxContainer textId="count">
        <CountDown />
      </BoxContainer>
      <BoxContainer textId="form">
        <FormAddTask />
      </BoxContainer>
    </DefaultTemplate>
  );
}
