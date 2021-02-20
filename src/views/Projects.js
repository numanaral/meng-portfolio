import Layout from "components/Layout";
import Projects from "containers/Projects/Projects";
import React from "react";

const ProjectsPage = () => (
  <Layout navbarProps={{ bgClassName: "", spacing: true }}>
    <Projects />
  </Layout>
);

export default ProjectsPage;
