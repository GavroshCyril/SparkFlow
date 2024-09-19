import "./App.css";
import { Sidebar, Task, TaskForm, TaskList } from "./components";

function App() {
  return (
    <>
      <Sidebar />
      <TaskForm />
      <Task />
      <TaskList />
    </>
  );
}

export default App;
