import Communications from "./Communications";
import Design from "./Design";
import Reportage from "./Reportage";
import Wakalet from "./Wakalet";

const tabs = [
  {
    title: "Social Media Roundup",
    content: Wakalet,
  },
  {
    title: "Reportage",
    content: Reportage,
  },
  {
    title: "Communications",
    content: Communications,
  },
  {
    title: "Design",
    content: Design,
  },
];

export { tabs };
