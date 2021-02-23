import React from "react";
import Navbar, { NAVBAR_HEIGHT } from "components/Navbar";
import Footer from "components/Footer";

const Layout = ({ children, navbarProps }) => {
  return (
    <>
      <Navbar {...navbarProps} />
      {navbarProps?.spacing && <div style={{ height: NAVBAR_HEIGHT }} />}
      {children}
      <Footer />
    </>
  );
};
export default Layout;
