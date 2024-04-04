import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 4,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 5,
    title: "Main Street News",
    path: "https://dos.fl.gov/historical/meetings-and-events/news-and-press-releases/",
    newTab: true,
  },
  {
    id: 1,
    title: "Communities",
    path: "/communities",
    newTab: false,
  },
  {
    id: 2,
    title: "Events",
    path: "/",
    newTab: false,
  },
  {
    id: 6,
    title: "More",
    newTab: false,
    submenu: [
      {
        id: 3,
        title: "Getting Started",
        path: "https://dos.fl.gov/historical/preservation/florida-main-street/getting-started/",
        newTab: false,
      },
      {
        id: 60,
        title: "The Four Point Approach",
        path: "https://dos.fl.gov/historical/preservation/florida-main-street/the-four-point-approach/",
        newTab: false,
      },
      {
        id: 61,
        title: "Job Opportunities",
        path: "https://dos.fl.gov/historical/preservation/florida-main-street/main-street-job-opportunities/",
        newTab: false,
      },
      {
        id: 62,
        title: "Preservation of Main Street",
        path: "https://dos.fl.gov/historical/preservation/florida-main-street/preservation-on-main-street-conference/",
        newTab: false,
      },
      {
        id: 63,
        title: "Ask the Locals",
        path: "https://dos.fl.gov/historical/preservation/florida-main-street/ask-the-locals/",
        newTab: false,
      },
    ],
  },
];
export default menuData;
