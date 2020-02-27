import React from "react";
import { ProjectsContext } from "./ProjectsContext";

export class ProjectSelect extends React.Component {
  constructor(props) {
    super(props);
  }

  getProjectName = (id) => {
    return this.context.projects.find(
      item => item.id === id
    ).name;
  }

  getProjectId = (name) => {
    return this.context.projects.find(
      item => item.name === name
    ).id;
  }

  render() {
    let select = (
      <select
        className="project__select project__select_editable"
        id="task-project"
        name="itemProjectId"
        defaultValue={this.props.itemProjectId ? this.getProjectName(this.props.itemProjectId) : "No project"}
        onChange={(e) => {this.props.onChange(e.target.name, this.getProjectId(e.target.value))}}
      >
        <option value="No project">No project</option>
        {this.context.projects.map(item => (
          <option value={item.name} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    );
    
    let input = (
      <input
        className="project__input project__input_uneditable"
        type="text"
        readOnly
        id="task-project"
        value={this.props.itemProjectId ? this.getProjectName(this.props.itemProjectId) : "No project"}
      ></input>
    );

    let projectField;
    if (this.props.editableFlag) {
      projectField = select;
    } else {
      projectField = input;
    }

    return (
      <div className="project">
        <label htmlFor="task-project" className="project__label">
          Project:
        </label>
        {projectField}
      </div>
    );
  }
}

ProjectSelect.contextType = ProjectsContext;
