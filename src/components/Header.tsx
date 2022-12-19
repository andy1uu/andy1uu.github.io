import React from "react";
import "../styles/components/Header.css";

type Link = {
  label: string;
  url: string;
};

type headerProps = {
  headerLinks: Link[];
};

const Header = (props: headerProps) => {

  const { headerLinks } = props;

  const links = headerLinks.map((link) => (
    <div className="Header-link" key={link.label}>
      <a href={link.url}>
        {link.label}
      </a>
    </div>
  ));

  return (
    <div className="Header">
      <div className="Header-container bg-brand-primary h-16">
        <div className="Header-Links flex">
          {links}
        </div>
      </div>
    </div>
  )
}

export default Header;