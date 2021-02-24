import React from "react";
import Link from "components/Link";
import { NavbarBrand as BsNavbarBrand } from "reactstrap";
import classnames from "classnames";

const NavbarBrand = ({ navbarCollapse, toggleNavbarCollapse }) => {
  return (
    <div className="navbar-translate">
      <BsNavbarBrand data-placement="bottom" to="/" title="Home" tag={Link}>
        <i className="fa fa-home" />
        Meng Wei
      </BsNavbarBrand>
      <button
        aria-expanded={navbarCollapse}
        className={classnames("navbar-toggler navbar-toggler", {
          toggled: navbarCollapse,
        })}
        onClick={toggleNavbarCollapse}
      >
        <span className="navbar-toggler-bar bar1" />
        <span className="navbar-toggler-bar bar2" />
        <span className="navbar-toggler-bar bar3" />
      </button>
    </div>
  );
};

export default NavbarBrand;
