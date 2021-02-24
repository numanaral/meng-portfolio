import React from "react";
import { LINK_TYPE } from "components/Link";

const NAVBAR_HEIGHT = 70;

const LINKS = [
  {
    label: "Photojournalism",
    to: "/photojournalism",
    type: LINK_TYPE.INTERNAL,
  },
  {
    label: "Projects",
    to: "/projects",
    type: LINK_TYPE.INTERNAL,
  },
  {
    label: <p className="d-lg-none">Vimeo</p>,
    to: "https://vimeo.com/user131632503",
    icon: <i className="fa fa-vimeo" />,
    "data-placement": "bottom",
    title: "Follow me on Vimeo",
    type: LINK_TYPE.EXTERNAL,
  },
  {
    label: <p className="d-lg-none">Instagram</p>,
    to: "https://www.instagram.com/meng.weiaral/",
    icon: <i className="fa fa-instagram" />,
    "data-placement": "bottom",
    title: "Follow me on Instagram",
    type: LINK_TYPE.EXTERNAL,
  },
];

export { NAVBAR_HEIGHT, LINKS };
