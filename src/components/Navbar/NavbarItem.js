import React from "react";
import NavItem from "reactstrap/lib/NavItem";
import NavLink from "reactstrap/lib/NavLink";
import Link, { LINK_TYPE } from "components/Link";

const NavbarItem = ({ label, to, icon, onClick, type, ...rest }) => {
  const linkProps = {
    onClick,
    ...rest,
  };
  if (type === LINK_TYPE.INTERNAL) {
    linkProps.to = to;
    linkProps.tag = Link;
  } else {
    linkProps.href = to;
    linkProps.target = "_blank";
  }

  return (
    <NavItem>
      <NavLink {...linkProps}>
        {icon}
        {label}
      </NavLink>
    </NavItem>
  );
};

export default NavbarItem;
