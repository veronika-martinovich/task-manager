import React from "react";
import { FocusedIcon } from "./FocusedIcon";
import { ViewItemIcon } from "./ViewItemIcon";
import { Checkbox } from "./Checkbox";
import { db } from "./firebase";
import { updateTask } from "./tasks";

export class TaskTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.tasks,
      taskType: this.props.taskType
    };
  }

  render() {
    if (this.state.taskType === "taskBox")
      return (
        <table className="task-table_task-list">
          <tbody>
            {this.state.tasks.map(item => {
              if (!item.projectId)
                return (
                  <tr className="task-table_task-item" key={item.id}>
                    <td>
                      <Checkbox
                        defaultChecked={item.isDone}
                        onClick={() => {
                          db.collection("tasks")
                            .doc(`${item.id}`)
                            .update({
                              isDone: !item.isDone
                            })
                            .then(() => {
                              console.log("Document successfully written!");
                              const tasksCopy = updateTask(
                                this.state.tasks,
                                item.id,
                                {
                                  isDone: !item.isDone
                                }
                              );
                              this.setState({
                                tasks: tasksCopy
                              });
                            })
                            .catch(function(error) {
                              console.error("Error writing document: ", error);
                            });
                        }}
                      />
                    </td>
                    <td>
                      <span className="task-item_title">{item.title}</span>
                    </td>
                    <td>
                      <FocusedIcon
                        fillColor={
                          item.isFocusedOn === false ? "#e6e6e6" : "#fff000"
                        }
                        onClick={() => {
                          db.collection("tasks")
                            .doc(`${item.id}`)
                            .update({
                              isFocusedOn: !item.isFocusedOn
                            })
                            .then(() => {
                              console.log("Document successfully written!");
                              const tasksCopy = updateTask(
                                this.state.tasks,
                                item.id,
                                {
                                  isFocusedOn: !item.isFocusedOn
                                }
                              );
                              this.setState({
                                tasks: tasksCopy
                              });
                            })
                            .catch(function(error) {
                              console.error("Error writing document: ", error);
                            });
                        }}
                      />
                    </td>
                    <td>
                      <ViewItemIcon />
                    </td>
                  </tr>
                );
            })}
          </tbody>
        </table>
      );

    if (this.state.taskType === "focusedTasks")
      return (
        <table className="task-table_task-list">
          <tbody>
            {this.state.tasks.map(item => {
              if (item.isFocusedOn)
                return (
                  <tr className="task-table_task-item" key={item.id}>
                    <td>
                      <Checkbox
                        defaultChecked={item.isDone}
                        onClick={() => {
                          db.collection("tasks")
                            .doc(`${item.id}`)
                            .update({
                              isDone: !item.isDone
                            })
                            .then(() => {
                              console.log("Document successfully written!");
                              const tasksCopy = updateTask(
                                this.state.tasks,
                                item.id,
                                {
                                  isDone: !item.isDone
                                }
                              );
                              this.setState({
                                tasks: tasksCopy
                              });
                            })
                            .catch(function(error) {
                              console.error("Error writing document: ", error);
                            });
                        }}
                      />
                    </td>
                    <td>
                      <span className="task-item_title">{item.title}</span>
                    </td>
                    <td>
                      <FocusedIcon
                        fillColor={
                          item.isFocusedOn === false ? "#e6e6e6" : "#fff000"
                        }
                        onClick={() => {
                          db.collection("tasks")
                            .doc(`${item.id}`)
                            .update({
                              isFocusedOn: !item.isFocusedOn
                            })
                            .then(() => {
                              console.log("Document successfully written!");
                              const tasksCopy = updateTask(
                                this.state.tasks,
                                item.id,
                                {
                                  isFocusedOn: !item.isFocusedOn
                                }
                              );
                              this.setState({
                                tasks: tasksCopy
                              });
                            })
                            .catch(function(error) {
                              console.error("Error writing document: ", error);
                            });
                        }}
                      />
                    </td>
                    <td>
                      <ViewItemIcon />
                    </td>
                  </tr>
                );
            })}
          </tbody>
        </table>
      );
  }
}
