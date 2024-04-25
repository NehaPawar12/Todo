import { createContext, useState } from "react";

export const taskContext = createContext(null);
export const TaskProvider = (props) => {
  const [data, setData] = useState([]);

  return (
    <taskContext.Provider value={{ data, setData }}>
      {props.children}
    </taskContext.Provider>
  );
};
