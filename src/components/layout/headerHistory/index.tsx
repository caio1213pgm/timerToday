import { TrashIcon } from "lucide-react";
import Button from "../../ui/Button";
import style from "./headerHistory.module.css";
import { useTask } from "../../../hooks/useTask";
import { TaskActionType } from "../../../actions/taskActions";

export default function HeaderHistory() {
  const { dispatch } = useTask();

  function deleteHistory() {
    dispatch({ type: TaskActionType.CLEAR_HISTORY });
  }
  return (
    <div className={style.headerHistory}>
      <span>Histórico</span>
      <Button
        type="button"
        variant="error"
        tooltip="Limpar histórico"
        onClick={deleteHistory}
      >
        <TrashIcon />
      </Button>
    </div>
  );
}
