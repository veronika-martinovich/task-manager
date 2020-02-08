import React from "react";
import { TaskTable } from "./TaskTable";

export const TaskBox = () => {
  return (
    <div className="task-box">
      <h3 className="task-box_heading">Task box</h3>
      <button className="task-box_btn">Create task</button>
      <TaskTable taskType="taskBox" />
    </div>
  );
};
