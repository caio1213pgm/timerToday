import { TrashIcon } from "lucide-react";
import Button from "../../ui/Button";
import style from "./headerHistory.module.css";

export default function HeaderHistory() {
  function deleteHistory() {
    localStorage.removeItem("taskState");
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
