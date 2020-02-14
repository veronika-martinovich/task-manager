import React from "react";

export const FocusedIcon = (props) => {
  return (
    <svg
      width="24"
      height="22"
      viewBox="0 0 133 122"
      className="task-item_focused-icon"
      onClick={() => props.onClick()}
    >
      <polygon
        points="70,5 90,41 136,48 103,80 111,126 70,105 29,126 36,80 5,48 48,41"
        fill={props.fillColor === false ? "#e6e6e6" : "#fff000"}
      />
    </svg>
  );
};
