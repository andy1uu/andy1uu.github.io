import React, { useState } from "react";
import "../styles/components/Header.css";

type Link = {
  label: string;
  url: string;
};

type headerProps = {
  headerLinks: Link[];
};

const Header = (props: headerProps) => {

  // Props from index
  const { headerLinks } = props;

  //button time
  const [isNavActive, setNavActive] = useState(false);

  const ToggleNav = () => {
    setNavActive(!isNavActive);
  };

  // Generating all the nav links
  const links = headerLinks.map((link) => (
    <div className="Header-link" onClick={ToggleNav} key={link.label}>
      <a href={link.url}>
        {link.label}
      </a>
    </div>
  ));

  return (
    <div className="Header">
      <div className="Header-container flex flex-wrap bg-brand-primary 
      pr-2 py-2 md:flex-nowrap">
        <div className="Header-Nav order-1 w-1/4 mt-auto mb-auto pl-4 md:hidden" 
        onClick={ToggleNav}>
            <div className="Header-NavSegment w-10 h-1 bg-brand-secondary 
            rounded"></div>
            <div className="Header-NavSegment w-10 h-1 bg-brand-secondary 
            rounded mt-1.5 mb-1.5"></div>
            <div className="Header-NavSegment w-10 h-1 bg-brand-secondary 
            rounded"></div>
        </div>
        <div className="Header-Logo order-2 w-1/2 text-center mt-auto 
        mb-auto text-2xl  md:order-1 md:w-1/3">
            Andy Luu
        </div>
        <div className={"Header-Links order-4 w-full md:flex md:order-2 " + 
        (isNavActive ? "ml-0 mt-12 absolute bg-brand-primary" : "hidden")}>
          {links}
        </div>
        <div className="Header-ImageContainer order-3 w-1/4 mt-auto mb-auto">
          <img className="Header-Image rounded-full w-12 h-12 ml-auto" 
          src={require("../images/logo2048.png")} alt="Profile.png"/>
        </div>
      </div>
    </div>
  )
}

export default Header;