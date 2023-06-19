import React from "react";
import "../styles/components/Hero.css";
import { getUsers } from "../api/test";

/* type Link = {
  label: string;
  url: string;
}; */

type heroProps = {

};

const Hero = (props: heroProps) => {

  return (
    <div id="Hero" className="Hero">
      <div className="Hero-container border-brand-tertiary border border-dashed border-8 text-center h-96 text-brand-primary">
        <button onClick={() => getUsers()}>CLICK ME</button>
        
      </div>
    </div>
  )
}

export default Hero;