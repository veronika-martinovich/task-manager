import React from "react";
import { createTask, updateTask } from "./tasks";
import { db } from "./firebase";
import { TasksContext } from "./TasksContext";
import { Content } from "./Content";

export class TasksProvider extends React.Component {
  state = {
    tasks: null,
    updateTask: this.updateTask.bind(this),
    createTask: this.createTask.bind(this)
  };

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

  updateTask(tasks, taskId, fieldsToUpdate) {
    const tasksCopy = updateTask(tasks, taskId, fieldsToUpdate);
    this.setState({
      tasks: tasksCopy
    });
    console.log('state', this.state.tasks)
  }

  createTask(tasks, taskToCreate) {
    const tasksCopy = createTask(tasks, taskToCreate);
    this.setState({
      tasks: tasksCopy
    });
    console.log('state', this.state.tasks)
  }

  render() {
    if (!this.state.tasks) return <span>"...Loading"</span>;
    return (
      <TasksContext.Provider value={this.state}>
        <Content />
      </TasksContext.Provider>
    );
  }
}
