import React from "react";
import { createProject, updateProject } from "../functionality";
import { db } from "../firebase";
import { ProjectsContext } from "./ProjectsContext";
import { Content } from "./Content";

export class ProjectsProvider extends React.Component {
  state = {
    projects: null,
    updateProject: this.updateProject.bind(this),
    createProject: this.createProject.bind(this)
  };

  componentDidMount() {
    let projects = [];
    db.collection("projects")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          projects.push({ id: doc.id, ...doc.data() });
        });
        this.setState({
          projects
        });
        console.log(this.state.projects);
      });
  }

  updateProject(projects, projectId, fieldsToUpdate) {
    const projectsCopy = updateProject(projects, projectId, fieldsToUpdate);
    this.setState({
      projects: projectsCopy
    });
    console.log('state', this.state.projects)
  }

  createProject(projects, projectToCreate) {
    const projectsCopy = createProject(projects, projectToCreate);
    this.setState({
      projects: projectsCopy
    });
    console.log('state', this.state.projects)
  }

  render() {
    if (!this.state.projects) return <span>"...Loading"</span>;
    return (
      <ProjectsContext.Provider value={this.state}>
        <Content />
      </ProjectsContext.Provider>
    );
  }
}
