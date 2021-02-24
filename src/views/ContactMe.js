import Layout from "components/Layout";
import ContactMe from "containers/ContactMe";
import React from "react";

const ContactMePage = () => (
  <Layout navbarProps={{ bgClassName: "", spacing: true }}>
    <ContactMe />
  </Layout>
);

export default ContactMePage;
