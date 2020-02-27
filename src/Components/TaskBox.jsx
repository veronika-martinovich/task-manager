import React from "react";
import { TasksContext } from "./TasksContext";
import { TaskTable } from "./TaskTable";
import { NewTaskForm } from "./NewTaskForm";
import { ViewTaskForm } from "./ViewTaskForm";
import { createTaskInDB } from "../functionality";
import { db } from "../firebase";
const firebase = require("firebase");

export class TaskBox extends React.Component {
  state = {
    taskToCreateId: null,
    taskToCreateTitle: "",
    taskToView: null
  };

  render() {
    let newTaskForm;
    if (this.state.taskToCreateId)
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
            createTaskInDB(taskToCreate, this.state.taskToCreateId)
              .then(() => {
                this.context.createTask(taskToCreate);
                console.log(this.context.tasks);
              })
              .catch(error => {
                console.log(error);
              });
          }}
          onCancel={() => {
            this.setState({
              taskToCreateId: null
            });
          }}
        />
      );

    if (this.state.taskToView)
      return <ViewTaskForm task={this.state.taskToView} />;

    return (
      <div className="task-box">
        <div className="task-box__top-container">
          <h3 className="task-box__heading">Task box</h3>
          <button
            className="primary-button"
            type="button"
            onClick={() => {
              db.collection("tasks")
                .get()
                .then(querySnapshot => {
                  this.setState({
                    taskToCreateId: querySnapshot.size + 1
                  });
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
