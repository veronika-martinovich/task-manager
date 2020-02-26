import React from "react";
import { NavLink } from "react-router-dom";

export const MenuLink = props => (
  <NavLink {...props} activeStyle={{ backgroundColor: '#f5f5f5', fontWeight: 600 }} />
);
