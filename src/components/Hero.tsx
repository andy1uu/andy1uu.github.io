import React from "react";
import "../styles/components/Hero.css";

type Link = {
  label: string;
  url: string;
};

type heroProps = {

};

const Hero = (props: heroProps) => {

  return (
    <div id="Hero" className="Hero">
      <div className="Hero-container bg-brand-primary">
        This is the start of the Hero component.
      </div>
    </div>
  )
}

export default Hero;