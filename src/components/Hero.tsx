import React from "react";
import "../styles/components/Hero.css";

/* type Link = {
  label: string;
  url: string;
}; */

type heroProps = {

};

const Hero = (props: heroProps) => {

  return (
    <div id="Hero" className="Hero">
      <div className="Hero-container bg-brand-tertiary border-brand-secondary border border-dashed border-8 text-center h-96">
        [WIP] Hero Component
      </div>
    </div>
  )
}

export default Hero;