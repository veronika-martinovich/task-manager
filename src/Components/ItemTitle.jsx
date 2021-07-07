import React from "react";

export const ItemTitle = props => {
  return (
    <input
      className={
        props.editableFlag
          ? "item-title item-title_editable"
          : "item-title item-title_uneditable"
      }
      type="text"
      name="itemTitle"
      readOnly={props.editableFlag ? false : true}
      id="item-title"
      value={props.itemTitle}
      onChange={(e) => {props.onChange(e.target.name, e.target.value)}}
    ></input>
  );
};
