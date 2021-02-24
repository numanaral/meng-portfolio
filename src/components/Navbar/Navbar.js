import React from "react";
import classnames from "classnames";

import { Collapse, Navbar, Nav, Container } from "reactstrap";
import "./Navbar.scss";
import NavbarItem from "./NavbarItem";
import { LINKS } from "./constants";
import useHook from "./useHook";
import NavbarBrand from "./NavbarBrand";

function ExamplesNavbar({ bgClassName = "navbar-transparent" }) {
  const {
    navbarColor,
    navbarCollapse,
    toggleNavbarCollapse,
    closeNavbarWhenUrlIsClicked,
  } = useHook(bgClassName);

  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <NavbarBrand
          navbarCollapse={navbarCollapse}
          toggleNavbarCollapse={toggleNavbarCollapse}
        />
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            {LINKS.map((linkProps) => (
              <NavbarItem
                key={linkProps.to}
                {...linkProps}
                onClick={closeNavbarWhenUrlIsClicked}
              />
            ))}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
