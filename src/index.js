import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { taskProvider } from "./contexts/taskContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <taskProvider>
      <App />
    </taskProvider>
  </React.StrictMode>
);
