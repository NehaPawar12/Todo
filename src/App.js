import "./App.css";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className=" mt-20 text-center text-red text-4xl text-blue-600 font-semibold ">
          Hey User ... 👋
        </h1>
      </div>
      <div className=" m-2 p-2 container">
        <CreateTask />
      </div>
      <TaskList />
    </div>
  );
}

export default App;
