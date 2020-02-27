import React from "react";

export const Description = props => {
  return (
    <div className="description">
      <label htmlFor="description" className="description__label">
        Description:
      </label>
      <textarea
        className={
          props.editableFlag
            ? "description__text description__text_editable"
            : "description__text description__text_uneditable"
        }
        id="description"
        name="itemDescription"
        cols="30"
        rows="10"
        readOnly={props.editableFlag ? false : true}
        value={props.itemDescription}
        onChange={(e) => {props.onChange(e.target.name, e.target.value)}}
      ></textarea>
    </div>
  );
};
