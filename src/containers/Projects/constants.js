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
    props: {
      documents: [
        {
          title: "Backscene magazine April 2020",
          fileName: "backscene-magazine-april-2020",
        },
      ],
    },
  },
  {
    title: "Communications",
    content: Communications,
    props: {
      documents: [
        {
          title: "Backscene magazine April to September 2020",
          fileName: "backscene-magazine-april-to-september-2020",
        },
        {
          title: "Backgrounder media kit",
          fileName: "backgrounder-media-kit",
        },
      ],
    },
  },
  {
    title: "Design",
    content: Design,
    props: {
      documents: [
        {
          title: "How did Uyghur conflict escalated in China",
          fileName: "how-did-uyghur-conflict-escalated-in-china",
        },
      ],
    },
  },
];

export { tabs };
