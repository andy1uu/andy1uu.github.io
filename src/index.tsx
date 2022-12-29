// Base Import Statements
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import reportWebVitals from "./reportWebVitals";
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

// Component Import Statements
import Header from "./components/Header";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Awards from "./components/Awards";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Types
type Link = {
  label: string;
  url: string;
};

type IconLink = {
  label: string;
  url: string;
  icon: JSX.Element;
};

// Constants
const name = "Andy Luu";

const headerLinks: Link[] = [
  {
    label: "Home",
    url: "#",
  },
  {
    label: "Education",
    url: "#Education",
  },
  {
    label: "Work Experience",
    url: "#Experiences",
  },
  {
    label: "Awards",
    url: "#Awards",
  },
  {
    label: "Skills",
    url: "#Skills",
  },
  {
    label: "Projects",
    url: "#Projects",
  },
  {
    label: "Contact",
    url: "#Contact",
  },
];

const footerIcons: IconLink[] = [
  {
    label: "Email",
    url: "mailto:andyluu324@gmail.com",
    icon: <FaEnvelope size={40}/>,
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/andy1uu/",
    icon: <FaFacebook size={40}/>,
  },
  {
    label: "GitHub",
    url: "https://github.com/Andy1uu",
    icon: <FaGithub size={40}/>,
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/andy.1uu/",
    icon: <FaInstagram size={40}/>,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/andyluu324",
    icon: <FaLinkedin size={40}/>,
  },
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className="Root bg-brand-secondary">
    <Header 
      headerLinks = {headerLinks}
    ></Header>
    <Hero></Hero>
    <Education></Education>
    <Experiences></Experiences>
    <Awards></Awards>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
    <Footer
      name = {name}
      footerIcons = {footerIcons}
    ></Footer>
  </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
