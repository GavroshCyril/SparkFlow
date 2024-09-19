import { Task } from "../Task";
import "./taskList.css";

export const TaskList = () => {
  return (
    <div className="task-list-container">
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
};
