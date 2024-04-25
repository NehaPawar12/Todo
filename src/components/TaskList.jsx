import React, { useContext, useState } from "react";
import { taskContext } from "../contexts/taskContext";
import {
  UnorderedListOutlined,
  UpCircleOutlined,
  DownCircleOutlined,
} from "@ant-design/icons";
const TaskList = () => {
  const { data } = useContext(taskContext);
  const [isExpanded, setIsExpanded] = useState(-1);
  const handleShowDesc = (index) => {
    setIsExpanded((prev) => (prev === index ? -1 : index));
  };
  return (
    <div className="container m-2 p-1 flex justify-center">
      <ul>
        {data.map((task, index) => (
          <li
            key={index}
            className="w-80 xs:w-52 m-2 p-2 bg-blue-100 border-2 border-solid border-blue-500 rounded "
          >
            {`${index + 1} )`}
            <UnorderedListOutlined className="mx-2 p-1 text-black" />
            <span>{task.Title}</span>
            <span className="flex justify-end ">
              {isExpanded === index ? (
                <UpCircleOutlined
                  onClick={() => handleShowDesc(index)}
                  className="p-2 text-blue-900"
                />
              ) : (
                <DownCircleOutlined
                  onClick={() => handleShowDesc(index)}
                  className="p-2  text-blue-900"
                />
              )}
            </span>
            {isExpanded === index && (
              <div>
                <div className="border-t border-gray-400 my-2 "></div>
                <span className="font-bold text-blue-400">Description:</span>
                {task.Desc}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
