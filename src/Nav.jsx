import React from 'react';

export class Nav extends React.Component {

  async componentDidMount() {
    const responseProjects = await fetch("https://task-manager-fee35.firebaseio.com/projects.json");
    /* const projects = await responseProjects.json(); */
    console.log(responseProjects);
  }

  render() {
    return (
      <nav className="nav">
        <ul className="nav_list">
          <li className="nav_item">
            <span className="nav_task-box">Task box</span>
          </li>
          <li className="nav_item">
            <span className="nav_task-focused">Focused tasks</span>
          </li>
          <li className="nav_item">
            <span className="nav_projects">Projects</span>
          </li>
        </ul>
      </nav>

    )
  }
}
