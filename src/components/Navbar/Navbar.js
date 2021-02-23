import React from "react";
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import Link from "components/Link";
import "./Navbar.scss";

function ExamplesNavbar({ bgClassName = "navbar-transparent" }) {
  const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState(bgClassName);
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setIsNavbarOpen((v) => !v);
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  const closeNavbarWhenUrlIsClicked = () => {
    if (!isNavbarOpen) return;
    toggleNavbarCollapse();
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor(bgClassName);
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand data-placement="bottom" to="/" title="Home" tag={Link}>
            <i className="fa fa-home" />
            Meng Wei
          </NavbarBrand>
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
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                to="/photojournalism"
                tag={Link}
                onClick={closeNavbarWhenUrlIsClicked}
              >
                {/* <i className="nc-icon nc-album-2" />  */}
                Photojournalism
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/projects"
                tag={Link}
                onClick={closeNavbarWhenUrlIsClicked}
              >
                {/* <i className="nc-icon nc-album-2" />  */}
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://vimeo.com/user131632503"
                target="_blank"
                title="Follow me on Vimeo"
              >
                <i className="fa fa-vimeo" />
                <p className="d-lg-none">Vimeo</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/meng.weiaral/"
                target="_blank"
                title="Follow me on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
