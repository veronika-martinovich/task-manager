import React from "react";
import { Checkbox } from "./Checkbox";
import { FocusedIcon } from "./FocusedIcon";

export class ViewTaskForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="view-task_container">
        <form className="view-task_form" action="">
          <input
            className="view-task_title"
            type="text"
            name=""
            id=""
            defaultValue={this.props.task.title}
          ></input>
          <label htmlFor="view-task_date" className="view-task_date-label">
            Created:
          </label>
          <input
            className="view-task_date"
            type="text"
            name="view-task_date"
            id="view-task_date"
            defaultValue={this.props.task.createdOn}
          ></input>
          <Checkbox defaultChecked={this.props.task.isDone}/>
          <FocusedIcon fillColor={this.props.task.isFocusedOn}/>
          <label
            htmlFor="view-task_description"
            className="view-task_description-label"
          >
            Description:
          </label>
          <textarea
            className="view-task_description"
            name="view-task_description"
            id="view-task_description"
            cols="30"
            rows="10"
            defaultValue={this.props.task.description}
          ></textarea>
          <label
            htmlFor="view-task_project"
            className="view-task_project-label"
          >
            Project:
          </label>
          <select
            className="view-task_project"
            name="view-task_project"
            id="view-task_project"
          ></select>
        </form>
      </div>
    );
  }
}
