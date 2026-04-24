import { useState } from "react";
import { TaskActionType } from "../../../actions/taskActions";
import { useTask } from "../../../hooks/useTask";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { toast } from "react-toastify";

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

  function verifyValues() {
    if (valuesInputs.work <= 0) {
      toast.error("Tempo de trabalho deve ser maior que 0");
      return false;
    }
    if (valuesInputs.shortBreak <= 0) {
      toast.error("Tempo de descanso curto deve ser maior que 0");
      return false;
    }
    if (valuesInputs.longBreak <= 0) {
      toast.error("Tempo de descanso longo deve ser maior que 0");
      return false;
    }
    return true;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!verifyValues()) return;
    dispatch({
      type: TaskActionType.EDIT_CONFIG,
      payload: valuesInputs,
    });
    toast.success("Configurações salvas com sucesso");
  }

  return (
    <form className="formGroup" onSubmit={handleSubmit}>
      <Input
        id="1"
        label="Tarefa"
        placeholder="Tempo em minutos"
        type="number"
        value={valuesInputs.work}
        onChange={({ target: { value } }) => addValuesInputs("work", value)}
      />
      <Input
        id="2"
        label="Descanso curto"
        placeholder="Tempo em minutos"
        type="number"
        value={valuesInputs.shortBreak}
        onChange={({ target: { value } }) =>
          addValuesInputs("shortBreak", value)
        }
      />
      <Input
        id="3"
        label="Descanso longo"
        placeholder="Tempo em minutos"
        type="number"
        value={valuesInputs.longBreak}
        onChange={({ target: { value } }) =>
          addValuesInputs("longBreak", value)
        }
      />
      <Button type="submit" disabled={!!taskState.activeTask}>
        Salvar
      </Button>
    </form>
  );
}
