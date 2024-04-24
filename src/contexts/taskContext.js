import { createContext } from "react";

export const taskContext = createContext(null);
export const taskProvider = (props) => {
  return <taskContext.Provider>{props.children}</taskContext.Provider>;
};
