import React from "react";
import { TaskTable } from "./TaskTable";
import { ViewTaskForm } from "./ViewTaskForm";

export class FocusedTasks extends React.Component {
  state = {
    taskToView: null
  }

  render() {
    if (this.state.taskToView) return <ViewTaskForm task={this.state.taskToView} />;

    return (
      <div className="focused-tasks">
        <h3 className="focused-tasks__heading">Focused tasks</h3>
        <TaskTable taskType="focusedTasks" onViewTaskClick={task => {
            this.setState({
              taskToView: task
            });
          }}/>
      </div>
    )
  }
}
