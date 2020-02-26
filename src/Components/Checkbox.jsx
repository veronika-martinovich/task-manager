import React from "react";

export const Checkbox = props => {
  return (
    <label className="checkbox-container">
      <input
        className="checkbox-container__checkbox"
        type="checkbox"
        defaultChecked={props.defaultChecked}
        onClick={() => props.onClick()}
      />
      <span className="checkbox-container__checkmark"></span>
    </label>
  );
};
