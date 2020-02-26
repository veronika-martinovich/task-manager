import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { TaskBox } from "./TaskBox";
import { FocusedTasks } from "./FocusedTasks";
import { ViewTaskForm } from "./ViewTaskForm";

export const Content = () => {
  return (
    <Router basename="/task_manager">
      <div className="App">
        <Logo />
        <main>
          <div className="main-wrapper">
            <Nav />
            <Route path="/task_box">
              <TaskBox />
            </Route>
            <Route path="/task_box/:id">
              <ViewTaskForm />
            </Route>
            <Route path="/focused_tasks">
                <FocusedTasks />
              </Route>
          </div>
        </main>
      </div>
    </Router>
  );
};
