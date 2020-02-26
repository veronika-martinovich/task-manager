import React from "react";
import { Checkbox } from "./Checkbox";
import { FocusedIcon } from "./FocusedIcon";
import { ProjectSelect } from "./ProjectSelect";
import { CreationDate } from "./CreationDate";

export class ViewTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskToEdit: null
    };
  }

  render() {
    return (
      <div className="view-task">
        <form className="view-task__form" action="">
          <div className="view-task__top-container">
            <input
              className={
                this.state.taskToEdit
                  ? "view-task__title view-task__title_editable"
                  : "view-task__title view-task__title_uneditable"
              }
              type="text"
              readOnly={this.state.taskToEdit ? false : true}
              id="task-title"
              defaultValue={this.props.task.title}
            ></input>
            <button
              className="view-task__btn"
              onClick={e => {
                e.preventDefault();
                this.setState({
                  taskToEdit: this.props.task.id
                });
              }}
            >
              Edit task
            </button>
          </div>
          <div className="view-task__date-container">
            <CreationDate date={this.props.task.createdOn.toDate()} />
          </div>
          <Checkbox defaultChecked={this.props.task.isDone} />
          <FocusedIcon fillColor={this.props.task.isFocusedOn} />
          <div className="view-task__project-container">
            <ProjectSelect
              editableFlag={this.state.taskToEdit ? true : false}
              projectId={this.props.task.projectId ? this.props.task.projectId : false}
            />
          </div>
          <label
            htmlFor="task-description"
            className="view-task__description-label"
          >
            Description:
          </label>
          <textarea
            className="view-task__description"
            id="task-description"
            cols="30"
            rows="10"
            defaultValue={this.props.task.description}
          ></textarea>
        </form>
      </div>
    );
  }
}
