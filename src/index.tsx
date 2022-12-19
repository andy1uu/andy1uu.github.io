// Base Import Statements
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import reportWebVitals from "./reportWebVitals";

// Component Import Statements
import Header from "./components/Header";
import Footer from "./components/Footer";

type Link = {
  label: string;
  url: string;
};

const headerLinks: Link[] = [
  {
    label: "Home",
    url: "#",
  },
  {
    label: "Footer",
    url: "#Footer",
  },
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Header 
      headerLinks={headerLinks}
    ></Header>
    <Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
