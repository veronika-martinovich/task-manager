import React from "react";

export const ViewTaskIcon = props => {
  return (
    <div
      className="ico ico_view-task"
      onClick={() => props.onClick()}
    ></div>
  );
};
