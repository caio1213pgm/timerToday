import { StopCircle } from "lucide-react";
import Button from "../../Button";
import Cycles from "../../Cycles";
import Input from "../../Input";

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
