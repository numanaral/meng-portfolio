import Layout from "components/Layout";
import Photojournalism from "containers/Photojournalism";
import React from "react";

const PhotojournalismPage = () => (
  <Layout navbarProps={{ bgClassName: "", spacing: true }}>
    <Photojournalism />
  </Layout>
);

export default PhotojournalismPage;
