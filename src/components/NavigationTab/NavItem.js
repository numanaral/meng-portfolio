import React from "react";
import NavLink from "reactstrap/lib/NavLink";
import BsNavItem from "reactstrap/lib/NavItem";

const NavItem = ({ title, activeTab, index, onClick }) => (
  <BsNavItem>
    <NavLink
      className={activeTab === index ? "active" : ""}
      onClick={() => {
        onClick(index);
      }}
    >
      {title}
    </NavLink>
  </BsNavItem>
);

export default NavItem;
