import React from 'react';

export const Checkbox = (props) => {
  
  return (
    <label className="task-item_checkbox-container">
      <input
      className="checkbox-container_checkbox"
      type="checkbox"
      defaultChecked={props.defaultChecked}
      onClick={() => props.onClick()}
      />
      <span className="checkbox-container_checkmark"></span>
    </label>
    )
}