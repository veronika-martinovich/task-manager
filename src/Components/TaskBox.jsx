import React from "react";
import { TasksContext } from "./TasksContext";
import { db } from "../firebase";
import { TaskTable } from "./TaskTable";
import { NewTaskForm } from "./NewTaskForm";
import { ViewTaskForm } from "./ViewTaskForm";
const firebase = require("firebase");

export class TaskBox extends React.Component {
  state = {
    taskToCreate: null,
    taskToCreateTitle: "",
    taskToView: null
  };

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
                console.log("Document successfully written!");
                this.context.createTask(this.state.tasks, taskToCreate);
              })
              .catch(function(error) {
                console.log(error);
              });
          }}
        />
      );

   
    if (this.state.taskToView) return <ViewTaskForm task={this.state.taskToView} />;

    return (
      <div className="task-box">
        <div className="task-box__top-container">
        <h3 className="task-box__heading">Task box</h3>
        <button
          className="task-box__btn"
          onClick={() => {
            this.setState({
              taskToCreate:
                Number(
                  this.context.tasks[this.context.tasks.length - 1].id.slice(4)
                ) + 1
            });
          }}
        >
          Create task
        </button>
        </div>
        {newTaskForm}
        <TaskTable
          taskType="taskBox"
          onViewTaskClick={task => {
            this.setState({
              taskToView: task
            });
          }}
        />
      </div>
    );
  }
}

TaskBox.contextType = TasksContext;
