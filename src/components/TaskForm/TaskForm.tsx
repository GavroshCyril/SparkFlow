import "./taskForm.css";

export const TaskForm = () => {
  return (
    <div className="task-form-container">
      <input className="task-form-input" type="text" placeholder="Add task" />
      <button>Add</button>
    </div>
  );
};
