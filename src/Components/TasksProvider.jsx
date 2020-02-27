import React from "react";
import { createTask, updateTask } from "../functionality";
import { db } from "../firebase";
import { TasksContext } from "./TasksContext";
import { ProjectsProvider } from "./ProjectsProvider";

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

  createTask(taskToCreate) {
    const tasksCopy = createTask(this.state.tasks, taskToCreate);
    this.setState({
      tasks: tasksCopy
    });
    console.log('state', this.state.tasks)
  }

  updateTask(taskId, fieldsToUpdate) {
    const tasksCopy = updateTask(this.state.tasks, taskId, fieldsToUpdate);
    this.setState({
      tasks: tasksCopy
    });
    console.log('state', this.state.tasks)
  }

  render() {
    if (!this.state.tasks) return <span>"...Loading"</span>;
    return (
      <TasksContext.Provider value={this.state}>
        <ProjectsProvider />
      </TasksContext.Provider>
    );
  }
}
