import React from "react";

export const Logo = () => {
  return (
    <header>
      <div className="header-wrapper">
        <div className="logo">
          <img
            src="/./images/task_manager.png"
            className="logo__image"
            alt="Brain image"
          />
          <p className="logo__text">Task manager</p>
        </div>
      </div>
    </header>
  );
};
