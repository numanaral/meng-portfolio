import React from "react";
import { NavLink } from "react-router-dom";

const Link = React.forwardRef((props, ref) => (
  <NavLink exact activeClassName="active" ref={ref} {...props}>
    {props.children}
  </NavLink>
));

export default Link;
