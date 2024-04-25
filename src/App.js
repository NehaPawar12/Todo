import { useContext } from "react";
import "./App.css";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import { taskContext } from "./contexts/taskContext";
function App() {
  const { data } = useContext(taskContext);
  return (
    <div className="App">
      <div className="container text-center">
        <h1 className=" my-10 mb-2 text-4xl text-blue-600 font-semibold ">
          Hey User ... 👋
        </h1>
        <span className=""> You have {data.length} tasks to complete ✔️</span>
      </div>
      <div className=" m-2 p-2 container">
        <CreateTask />
      </div>
      <TaskList />
    </div>
  );
}

export default App;
