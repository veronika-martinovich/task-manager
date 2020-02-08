import React from "react";
import { TaskTable } from "./TaskTable";

export const FocusedTasks = () => {
  return (
    <div className="focused-tasks">
      <h3 className="focused-tasks_heading">Focused tasks</h3>
      <TaskTable taskType="focusedTasks" />
    </div>
  );
};
