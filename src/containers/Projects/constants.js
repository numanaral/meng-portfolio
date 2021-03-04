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
      shorthands: [
        {
          fileName:
            "calgary-parents--students--safety-depends-on-parents-and-children-themselves",
          title:
            "Calgary parents: Students' safety depends on parents and children themselves",
        },
        {
          fileName:
            "calgary-small-business-donates-winter-clothing---we-can-t-have-one-without-the-other-",
          title:
            "Calgary small business donates winter clothing: 'We can't have one without the other'",
        },
        {
          fileName:
            "sait-gets-ready-to-vote-on-campus-for-the-next-federal-election",
          title:
            "SAIT gets ready to Vote on Campus for the next federal election",
        },
        {
          fileName:
            "was-it-worth-the-hassle--calgarians-hope-to-see-improvements-in-privatized-driving-exam-services",
          title:
            "Was it worth the hassle? Calgarians hope to see improvements in privatized driving exam services",
        },
        {
          fileName:
            "-a-little-bit-of--normal-and--a-big-dose--of-safe--at--the-calgary-zoolights--during-the-pandemic",
          title:
            "A little bit of normal and a big dose of safe at the calgary Zoolights during the pandemic",
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
