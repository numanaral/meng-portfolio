import Communications from "./Communications";
import Reportage from "./Reportage";
import Wakalet from "./Wakalet";

const tabs = [
  {
    title: "Reportage",
    content: Reportage,
    props: {
      documents: [
        {
          title: "Backscene magazine April 2020",
          fileName: "backscene-magazine-april-2020",
        },
        {
          title: "How did Uyghur conflict escalated in China",
          fileName: "how-did-uyghur-conflict-escalated-in-china",
        },
      ],
    },
  },
  {
    title: "Social Media Roundup",
    content: Wakalet,
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
];

export { tabs };
