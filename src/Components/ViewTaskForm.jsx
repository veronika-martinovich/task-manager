import React from "react";
import { updateTaskInDB } from "../functionality";
import { TasksContext } from "./TasksContext";
import { ItemTitle } from "./ItemTitle";
import { CreationDate } from "./CreationDate";
import { Checkbox } from "./Checkbox";
import { FocusedIcon } from "./FocusedIcon";
import { ProjectSelect } from "./ProjectSelect";
import { Description } from "./Description";

export class ViewTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskToEditId: null,
      itemTitle: this.props.task.title,
      itemProjectId: this.props.task.projectId,
      itemDescription: this.props.task.description
    };
  }

  onChange = (fieldName, fieldValue) => {
    this.setState({
      [fieldName]: fieldValue
    });
  };

  render() {
    let buttons;
    if (this.state.taskToEditId) {
      buttons = (
        <div className="view-task__button-container">
          <button
            className="primary-button"
            type="button"
            onClick={() => {
              const taskToEdit = {
                description: this.state.itemDescription,
                projectId: this.state.itemProjectId,
                title: this.state.itemTitle
              };
              updateTaskInDB(taskToEdit, this.state.taskToEditId)
                .then(() => {
                  this.context.updateTask(this.state.taskToEditId, taskToEdit);
                  this.setState({
                    taskToEditId: null
                  });
                })
                .catch(error => {
                  console.log(error);
                });
            }}
          >
            Save
          </button>
          <button
            className="secondary-button"
            type="button"
            onClick={() => {
              this.setState({
                taskToEditId: null
              });
            }}
          >
            Cancel
          </button>
        </div>
      );
    } else {
      buttons = (
        <button
          className="primary-button"
          type="button"
          onClick={() => {
            this.setState({
              taskToEditId: this.props.task.id
            });
          }}
        >
          Edit task
        </button>
      );
    }

    return (
      <div className="view-task">
        <form className="view-task__form" action="">
          <div className="view-task__top-container">
            <ItemTitle
              editableFlag={this.state.taskToEditId ? true : false}
              itemTitle={this.state.itemTitle}
              onChange={(fieldName, fieldValue) =>
                this.onChange(fieldName, fieldValue)
              }
            />
            {buttons}
          </div>
          <div className="view-task__date-container">
            <CreationDate date={this.props.task.createdOn.toDate()} />
          </div>
          <div className="view-task__icons-container">
            <Checkbox defaultChecked={this.props.task.isDone} />
            <FocusedIcon fillColor={this.props.task.isFocusedOn} />
          </div>
          <div className="view-task__project-container">
            <ProjectSelect
              editableFlag={this.state.taskToEditId ? true : false}
              itemProjectId={
                this.state.itemProjectId ? this.state.itemProjectId : false
              }
              onChange={(fieldName, fieldValue) =>
                this.onChange(fieldName, fieldValue)
              }
            />
          </div>
          <div className="view-task__description-container">
            <Description
              editableFlag={this.state.taskToEditId ? true : false}
              itemDescription={this.state.itemDescription}
              onChange={(fieldName, fieldValue) =>
                this.onChange(fieldName, fieldValue)
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

ViewTaskForm.contextType = TasksContext;
