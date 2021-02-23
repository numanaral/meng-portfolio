import React from "react";
import { Container } from "reactstrap";

import Header from "./Header";
import MyWork from "./MyWork";
// import ContactMe from "./ContactMe";
import ContactMeJotForm from "./ContactMeJotForm";

const Home = () => {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <>
      <Header />
      <div className="main">
        <div className="section text-center pb-0">
          <Container>
            <h2 className="title">My Work</h2>
            <MyWork />
          </Container>
          {/* <ContactMe /> */}
          <div style={{ marginTop: 100 }} />
          <ContactMeJotForm />
        </div>
      </div>
    </>
  );
};

export default Home;
