import React from "react";

export const TasksContext = React.createContext({
  tasks: [],
  updateTask: () => {},
  createTask: () => {}
});