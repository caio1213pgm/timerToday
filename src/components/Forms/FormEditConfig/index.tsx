import { useState } from "react";
import { TaskActionType } from "../../../actions/taskActions";
import { useTask } from "../../../hooks/useTask";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

interface IValuesInputs {
  work: number;
  shortBreak: number;
  longBreak: number;
}

export default function FormEditConfig() {
  const { taskState, dispatch } = useTask();
  const [valuesInputs, setValuesInputs] = useState<IValuesInputs>({
    work: taskState.config.work,
    shortBreak: taskState.config.shortBreak,
    longBreak: taskState.config.longBreak,
  });

  function addValuesInputs(label: keyof IValuesInputs, value: number | string) {
    setValuesInputs((prev) => ({
      ...prev,
      [label]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch({
      type: TaskActionType.EDIT_CONFIG,
      payload: valuesInputs,
    });
  }

  return (
    <form className="formGroup" onSubmit={handleSubmit}>
      <Input
        id="1"
        label="Tarefa"
        placeholder="tarefa"
        type="number"
        value={valuesInputs.work}
        onChange={({ target: { value } }) => addValuesInputs("work", value)}
      />
      <Input
        id="2"
        label="Descanso curto"
        placeholder="Descanso curto"
        type="number"
        value={valuesInputs.shortBreak}
      />
      <Input
        id="3"
        label="Descanso longo"
        placeholder="Descanso longo"
        type="number"
        value={valuesInputs.longBreak}
      />
      <Button type="submit">Salvar</Button>
    </form>
  );
}
