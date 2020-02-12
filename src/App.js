import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { TaskBox } from "./TaskBox";
import { FocusedTasks } from "./FocusedTasks";

function App() {
  return (
    <Router basename="/task_manager">
      <div className="App">
        <header>
          <div className="header-wrapper">
            <Logo />
          </div>
        </header>
        <main>
          <div className="main-wrapper">
            <Nav />
            <Route path="/task_box">
              <TaskBox />
            </Route>
            <Route path="/focused_tasks">
              <FocusedTasks />
            </Route>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App;
