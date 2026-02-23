import { StopCircle } from "lucide-react";
import Cycles from "../../Cycles";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

export default function FormAddTask() {
  return (
    <form className="formGroup">
      <Input id="taskIn" label="Task" placeholder="Digite sua task" />
      <div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <Cycles />
      <div>
        <Button type="button" variant={"primary"}>
          <StopCircle />
        </Button>
      </div>
    </form>
  );
}
