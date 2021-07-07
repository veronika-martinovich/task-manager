import React from "react";
import { TasksContext } from "./TasksContext";
import { FocusedIcon } from "./FocusedIcon";
import { ViewTaskIcon } from "./ViewTaskIcon";
import { Checkbox } from "./Checkbox";
import { db } from "../firebase";

export class TaskTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskType: this.props.taskType
    };
  }

  render() {
    if (this.state.taskType === "taskBox")
      return (
        <table className="task-table">
          <tbody>
            {this.context.tasks.map(item => {
              if (!item.projectId)
                return (
                  <tr className="task-table__task-item" key={item.id}>
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
                              this.context.updateTask(item.id, {
                                isDone: !item.isDone
                              });
                            })
                            .catch(function(error) {
                              console.error("Error writing document: ", error);
                            });
                        }}
                      />
                    </td>
                    <td>
                      <span
                        className={
                          item.isDone
                            ? "task-table__task-title task-table__task-title_done"
                            : "task-table__task-title"
                        }
                      >
                        {item.title}
                      </span>
                    </td>
                    <td>
                      <FocusedIcon
                        fillColor={item.isFocusedOn}
                        onClick={() => {
                          db.collection("tasks")
                            .doc(`${item.id}`)
                            .update({
                              isFocusedOn: !item.isFocusedOn
                            })
                            .then(() => {
                              console.log("Document successfully written!");
                              this.context.updateTask(item.id, {
                                isFocusedOn: !item.isFocusedOn
                              });
                            })
                            .catch(function(error) {
                              console.error("Error writing document: ", error);
                            });
                        }}
                      />
                    </td>
                    <td>
                      <ViewTaskIcon
                        onClick={() => this.props.onViewTaskClick(item)}
                      />
                    </td>
                  </tr>
                );
            })}
          </tbody>
        </table>
      );

    if (this.state.taskType === "focusedTasks")
      return (
        <table className="task-table">
          <tbody>
            {this.context.tasks.map(item => {
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
                              this.context.updateTask(item.id, {
                                isDone: !item.isDone
                              });
                            })
                            .catch(function(error) {
                              console.error("Error writing document: ", error);
                            });
                        }}
                      />
                    </td>
                    <td>
                      <span
                        className={
                          item.isDone
                            ? "task-table__task-title task-table__task-title_done"
                            : "task-table__task-title"
                        }
                      >
                        {item.title}
                      </span>
                    </td>
                    <td>
                      <FocusedIcon
                        fillColor={item.isFocusedOn}
                        onClick={() => {
                          db.collection("tasks")
                            .doc(`${item.id}`)
                            .update({
                              isFocusedOn: !item.isFocusedOn
                            })
                            .then(() => {
                              console.log("Document successfully written!");
                              this.context.updateTask(item.id, {
                                isFocusedOn: !item.isFocusedOn
                              });
                            })
                            .catch(function(error) {
                              console.error("Error writing document: ", error);
                            });
                        }}
                      />
                    </td>
                    <td>
                      <ViewTaskIcon
                        onClick={() => this.props.onViewTaskClick(item)}
                      />
                    </td>
                  </tr>
                );
            })}
          </tbody>
        </table>
      );
  }
}

TaskTable.contextType = TasksContext;
