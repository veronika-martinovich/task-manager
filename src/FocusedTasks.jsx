import React from "react";
import { db } from "./firebase";
import { TaskTable } from "./TaskTable";

export class FocusedTasks extends React.Component {
  state = {
    tasks: null,
  }

  componentDidMount() {
    let tasks = [];
    db.collection("tasks")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          tasks.push({ id: doc.id, ...doc.data() });
        });
        this.setState({
          tasks
        });
        console.log(this.state.tasks);
      });
  }

  render() {
    if (!this.state.tasks) return <span>"...Loading"</span>;
    return (
      <div className="focused-tasks">
        <h3 className="focused-tasks_heading">Focused tasks</h3>
        <TaskTable taskType="focusedTasks" tasks={this.state.tasks}/>
      </div>
    )
  }
}
