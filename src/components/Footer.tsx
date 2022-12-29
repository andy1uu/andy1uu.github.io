import React from "react";
import { FaCopyright } from "react-icons/fa";
import "../styles/components/Footer.css";

type IconLink = {
  label: string;
  url: string;
  icon: JSX.Element;
};

type footerProps = {
  name: string;
  footerIcons: IconLink[];
};

const Footer = (props: footerProps) => {

  const { name } = props;
  const { footerIcons } = props;
  const year = new Date().getFullYear();

  // Generating all the nav links
  const socialIcons = footerIcons.map((socialIcon) => (
      <a href={socialIcon.url}  className="w-1/5 pb-1" key={socialIcon.label}>
        <div className="Header-social flex justify-center items-center">
            {socialIcon.icon}
        </div>
      </a>
  ));

  return (
    <div id="Footer" className="Footer">
      <div className="Footer-container flex flex-col bg-brand-secondary text-brand-tertiary p-8">
        <div className="Footer-logo text-center mb-8 text-4xl">
            {name}
        </div>
        <div className="Footer-socials flex flex-wrap justify-center items-center mx-8 mb-8">
            {socialIcons}
        </div>
        <div className="Footer-copyright flex justify-center items-center">
          <div className="Footer-copyrightIcon mr-1">
            <FaCopyright  size={16}/>
          </div>
          <div className="Footer-copyrightMessage text-xs">
            {year} {name}. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;