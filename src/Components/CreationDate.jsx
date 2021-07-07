import React from "react";
import { getDate } from "../functionality";

export const CreationDate = props => {
  return (
    <span className="creation-date">{`Created: ${getDate(props.date)}`}</span>
  );
};
