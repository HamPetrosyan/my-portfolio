import { FiTool, FiBook, FiFolder } from "react-icons/fi";
import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile_image.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "Tic Tac Toe",
    description: "React-based game",
    bgImage: "/work-1.png",
    url: "https://github.com/HamPetrosyan/TicTacToe.git",
  },
  {
    title: "GitHub Finder",
    description: "Search GitHub profiles",
    bgImage: "/work-2.png",
    url: "https://github.com/HamPetrosyan/github-profile-finder2.git",
  },
  {
    title: "To-Do App",
    description: "Task management tool",
    bgImage: "/work-3.png",
    url: "https://github.com/HamPetrosyan/Todo-List.git",
  },
  {
    title: "Country Explorer",
    description: "REST API integration",
    bgImage: "/work-4.png",
    url: "https://github.com/HamPetrosyan/Countries-Api.git",
  },
];

export const infoList = [
  {
    icon: FiTool,
    title: "Tech Skills",
    description: "Languages: HTML, CSS, JavaScript ...",
    details: [
      "Languages: HTML, CSS, JavaScript (ES6+), TypeScript",
      "Frameworks/Libraries: React, Next.js, Redux Toolkit, React Hook Form",
      "Tools & Platforms: Vite, npm, Axios, redux-persist",
      "Design: Material UI, Tailwind CSS, Sass/SCSS, CSS3",
      "Animation: Framer Motion",
      "Version Control: Git, GitHub",
    ],
  },
  {
    icon: FiBook,
    title: "Education",
    description: "Front-End Development Program",
    details: [
      {
        edu: "Front-End Development Program – Heroco Development School (2023–2024)",
        details: [
          "Gained a solid foundation in Computer Science fundamentals (algorithms, problem-solving, data structures).",
          "Learned front-end technologies: HTML, CSS, JavaScript (ES6+).",
          "Specialized in React for building interactive UIs and managing state with Redux Toolkit.",
          "Worked with modern tools and frameworks: Next.js, Tailwind CSS, SCSS, Material-UI.",
          "Practiced Git & GitHub for version control and collaboration.",
          "Applied best practices in responsive design, animations (Framer Motion), and API integration.",
        ],
      },
      {
        edu: "Folk Music Department – Yerevan State Conservatory (Expected: 2026)",
        details: [],
      },
    ],
  },
  {
    icon: FiFolder,
    title: "Projects",
    description: "Completed 5+ projects",
  },
];
