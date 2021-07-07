import React from "react";
import { MenuLink } from "./MenuLink";
import { ProjectsContext } from "./ProjectsContext";

export class Nav extends React.Component {
  state = {
    projects: this.context.projects
  };

  render() {
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <MenuLink
              to="/task_box"
              className="nav__link nav__link_task-box"
              activeClassName="selected"
            >
              Task box
            </MenuLink>
          </li>
          <li className="nav__item">
            <MenuLink
              to="/focused_tasks"
              className="nav__link nav__link_task-focused"
            >
              Focused tasks
            </MenuLink>
          </li>
          <li className="nav__item">
            <MenuLink
              to="/projects"
              className="nav__link nav__link_projects projects"
            >
              Projects
            </MenuLink>
            <ul className="projects__list">
              {this.state.projects.map(item => (
                <li key={item.id} className="projects__item">
                  <a>{item.name}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

Nav.contextType = ProjectsContext;
