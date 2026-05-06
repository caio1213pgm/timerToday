import FormEditConfig from "../components/Forms/FormEditConfig";
import BoxContainer from "../components/ui/BoxContainer";
import DefaultTemplate from "../template/DefaultTemplate";

export default function SettingsPage() {
  return (
    <DefaultTemplate>
      <BoxContainer textId="settings">
        <FormEditConfig />
      </BoxContainer>
    </DefaultTemplate>
  );
}
