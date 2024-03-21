import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Communities",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Events",
    path: "/",
    newTab: false,
  },
  {
    id: 3,
    title: "Getting Started",
    path: "/",
    newTab: false,
  },
  // {
  //   id: 5,
  //   title: "Contact",
  //   path: "/contact",
  //   newTab: false,
  // },
  // {
  //   id: 5,
  //   title: "Blog",
  //   path: "/blogs",
  //   newTab: false,
  // },
  {
    id: 6,
    title: "More",
    newTab: false,
    submenu: [
      {
        id: 60,
        title: "The Four Point Approach",
        path: "/about",
        newTab: false,
      },
      {
        id: 61,
        title: "Main Street News",
        path: "/about",
        newTab: false,
      },
      {
        id: 62,
        title: "Program Resources",
        path: "/about",
        newTab: false,
      },
      {
        id: 63,
        title: "Florida Main Street Reporting System",
        path: "/contact",
        newTab: false,
      },
      {
        id: 64,
        title: "Main Street Job Opportunities",
        path: "/blogs",
        newTab: false,
      },
      {
        id: 66,
        title: "Preservation on Main Street Conference",
        path: "/about",
        newTab: false,
      },
      {
        id: 67,
        title: "Ask the Locals",
        path: "/about",
        newTab: false,
      },
    ],
  },
];
export default menuData;
