import { createContext, useEffect, useState } from "react";

export const taskContext = createContext(null);
export const TaskProvider = (props) => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("TaskList");
    return savedData ? JSON.parse(savedData) : [];
  });
  useEffect(() => {
    localStorage.setItem("TaskList", JSON.stringify(data));
  }, [data]);
  return (
    <taskContext.Provider value={{ data, setData }}>
      {props.children}
    </taskContext.Provider>
  );
};
