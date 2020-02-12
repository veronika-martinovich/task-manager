import React from "react";
import { MenuLink } from "./MenuLink";
import { db } from "./firebase";

export class Nav extends React.Component {
  state = {
    projects: null
  };

  componentDidMount() {
    let projects = [];
    db.collection("projects")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          projects.push({id: doc.id, ...doc.data()});
        });
        this.setState({
          projects
        });
        console.log(projects)
      });
  }

  render() {

    let projects;
    if (!this.state.projects) {
      projects = "...Loading";
    } else {
      projects = this.state.projects.map(item => (
        <li key={item.id} className="projects_item">
          <a>{item.name}</a>
        </li>
      )
    )
    }

    return (
      <nav className="nav">
        <ul className="nav_list">
          <li className="nav_item">
            <MenuLink to="/task_box" className="nav_task-box">
            Task box
            </MenuLink>
          </li>
          <li className="nav_item">
          <MenuLink to="/focused_tasks" className="nav_task-focused">
            Focused tasks
          </MenuLink>  
          </li>
          <li className="nav_item">
            <span className="nav_projects">Projects</span>
            <ul className="projects_list">
              {projects}
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}
