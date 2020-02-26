import React from "react";
import { ProjectsContext } from "./ProjectsContext";

export class ProjectSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: this.props.projectId,
      editableFlag: this.props.editableFlag
    };
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      editableFlag: nextProps.editableFlag
    };
  }

  getProjectName() {
    if (this.state.projectId) {
      return this.context.projects.find(
        item => item.id === this.state.projectId
      ).name;
    } else return "No project";
  }

  render() {
    if (this.state.editableFlag)
      return (
        <div className="project">
          <label htmlFor="task-project" className="project__label">
            Project:
          </label>
          <select
            className="project__select project__select_editable"
            id="task-project"
            defaultValue={this.getProjectName()}
          >
            <option value="No project">No project</option>
            {this.context.projects.map(item => (
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      );

    return (
      <div className="project">
        <label htmlFor="task-project" className="project__label">
          Project:
        </label>
        <input
          className="project__input project__input_uneditable"
          type="text"
          readOnly
          id="task-project"
          defaultValue={this.getProjectName()}
        ></input>
      </div>
    );
  }
}

ProjectSelect.contextType = ProjectsContext;
