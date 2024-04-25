import React, { useContext, useEffect, useState } from "react";
import { taskContext } from "../contexts/taskContext";
import {
  UnorderedListOutlined,
  UpCircleOutlined,
  DownCircleOutlined,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import { message } from "antd";
const TaskList = () => {
  const { data, setData } = useContext(taskContext);

  const [isExpanded, setIsExpanded] = useState(-1);
  const handleShowDesc = (index) => {
    setIsExpanded((prev) => (prev === index ? -1 : index));
  };
  const removeTaskHandler = (index) => {
    const filteredData = data.filter((item, ind) => {
      return ind !== index;
    });
    setData(filteredData);
    message.warning("Task Completed");
  };
  return (
    <div data-aos="fade-up" className="container m-2 p-1 flex justify-center">
      <ul>
        {data.map((task, index) => (
          <li
            key={index}
            className="w-96 xs:w-52 m-2 p-2 bg-blue-50 border-2 border-solid border-blue-500 rounded  slide-up"
          >
            <UnorderedListOutlined className="mx-2 p-1 text-black" />
            <span>
              {task.Title}
              <span className="float-end">
                <CheckCircleTwoTone
                  twoToneColor="#52c41a"
                  className="text-lg"
                  onClick={() => removeTaskHandler(index)}
                />
              </span>
            </span>
            <span className=" float-end ">
              {isExpanded === index ? (
                <UpCircleOutlined
                  onClick={() => handleShowDesc(index)}
                  className="text-blue-900 mx-2 text-lg"
                />
              ) : (
                <DownCircleOutlined
                  onClick={() => handleShowDesc(index)}
                  className="text-blue-900 mx-2 text-lg"
                />
              )}
            </span>
            {isExpanded === index && (
              <div>
                <div className="border-t border-gray-400 my-2 "></div>
                <span className="flex justify-center font-bold text-blue-500">
                  Description
                </span>
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
