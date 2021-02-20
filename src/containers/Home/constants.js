import MiniDocumentary from "./MiniDocumentary";
import { ACTION_TYPES } from "./SectionCard";

const sections = [
  {
    text: {
      title: "Photojournalism",
      subTitle: "",
    },
    image: {
      src: require("assets/img/landing-page/landing-page.jpeg"),
    },
    action: {
      type: ACTION_TYPES.LINK,
      props: {
        link: "photojournalism",
      },
    },
  },
  {
    text: {
      title: "Mini Documentary",
      subTitle: "",
    },
    image: {
      src: require("assets/img/landing-page/landing-page.jpeg"),
    },
    action: {
      type: ACTION_TYPES.MODAL,
      props: {
        title: "Mini Documentary",
        body: MiniDocumentary,
      },
    },
  },
  {
    text: {
      title: "Projects",
      subTitle: "",
    },
    image: {
      src: require("assets/img/landing-page/landing-page.jpeg"),
    },
    action: {
      type: ACTION_TYPES.LINK,
      props: {
        link: "projects",
      },
    },
  },
];

export { sections };
