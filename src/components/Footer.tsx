import React from "react";
import "../styles/components/Footer.css";

/* type Link = {
  label: string;
  url: string;
}; */

type footerProps = {

};

const Footer = (props: footerProps) => {

  return (
    <div id="Footer" className="Footer">
      <div className="Footer-container bg-brand-tertiary border-brand-secondary border border-dashed border-8 text-center h-96">
        This is the start of the Footer component.
      </div>
    </div>
  )
}

export default Footer;