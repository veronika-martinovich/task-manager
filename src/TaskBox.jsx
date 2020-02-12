import React from "react";
import { db } from "./firebase";
import { TaskTable } from "./TaskTable";
import { NewTaskForm } from "./NewTaskForm";
import { createTask } from "./tasks";
const firebase = require("firebase");

export class TaskBox extends React.Component {
  state = {
    tasks: null,
    taskToCreate: null,
    taskToCreateTitle: ""
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

  render() {
    let newTaskForm;
    if (this.state.taskToCreate)
      newTaskForm = (
        <NewTaskForm
          onChange={title => {
            this.setState({
              taskToCreateTitle: title
            });
          }}
          title={this.state.taskToCreateTitle}
          onSave={() => {
            const taskToCreate = {
              createdOn: firebase.firestore.Timestamp.fromDate(new Date()),
              description: "",
              isDone: false,
              isFocusedOn: false,
              projectId: null,
              title: this.state.taskToCreateTitle,
              userId: "helloveronika"
            };
            db.collection("tasks")
              .doc(`task${this.state.taskToCreate}`)
              .set(taskToCreate)
              .then(() => {
                const tasksCopy = createTask(this.state.tasks, taskToCreate);
                this.setState({
                  tasks: tasksCopy
                });
              })
              .catch(function(error) {
                console.log(error);
              });
          }}
        />
      );

    if (!this.state.tasks) return <span>"...Loading"</span>;
    return (
      <div className="task-box">
        <h3 className="task-box_heading">Task box</h3>
        <button
          className="task-box_btn"
          onClick={() => {
            this.setState({
              taskToCreate:
                Number(
                  this.state.tasks[this.state.tasks.length - 1].id.slice(4)
                ) + 1
            });
          }}
        >
          Create task
        </button>
        {newTaskForm}
        <TaskTable taskType="taskBox" tasks={this.state.tasks} />
      </div>
    );
  }
}
