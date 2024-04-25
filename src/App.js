import { useContext } from "react";
import "./App.css";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import { taskContext } from "./contexts/taskContext";
import { XOutlined, LinkedinOutlined, GithubOutlined } from "@ant-design/icons";

function App() {
  const { data } = useContext(taskContext);
  return (
    <div className="App">
      <div className="container m-1 p-1">
        <div className="container text-center">
          <h1 className=" my-10 mb-2 text-4xl text-blue-600 font-semibold ">
            Hey User ... 👋
          </h1>
          <span className="">
            You have <span className="font-bold"> {data.length}</span> tasks to
            complete ✔️
          </span>
        </div>
        <div className=" m-2 p-2 container">
          <CreateTask />
        </div>
        <TaskList />
        <div className="  flex justify-center slide-up ">
          <span className="bg-blue-100 m-0 p-1 rounded-xl w-72 text-center">
            <p className="text-black font-bold my-1">Connect With Me </p>

            <GithubOutlined
              className="mx-2 text-2xl "
              onClick={() =>
                (window.location.href = "https://github.com/RohanM-12")
              }
            />
            <LinkedinOutlined
              className="mx-2 text-2xl "
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/rohan-m1212/")
              }
            />
            <XOutlined
              className="mx-2 text-2xl "
              onClick={() =>
                (window.location.href = "https://twitter.com/Rohan_M1212")
              }
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
