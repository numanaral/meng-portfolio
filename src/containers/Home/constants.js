import IMAGES from "assets/images.json";
import MiniDocumentary from "./MiniDocumentary";
import { ACTION_TYPES } from "./SectionCard";

const sections = [
  {
    text: {
      title: "Photojournalism",
      subTitle: "",
    },
    image: IMAGES.Home["photojournalism.jpg"],
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
    image: IMAGES.Home["mini-documentary.jpeg"],
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
    image: IMAGES.Home["project.jpeg"],
    action: {
      type: ACTION_TYPES.LINK,
      props: {
        link: "projects",
      },
    },
  },
];

export { sections };
