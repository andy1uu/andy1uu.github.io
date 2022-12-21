import React from "react";
import "../styles/components/Skills.css";

/* type Link = {
  label: string;
  url: string;
}; */

type skillsProps = {

};

const Skills = (props: skillsProps) => {

  return (
    <div id="Skills" className="Skills">
      <div className="Skills-container bg-brand-tertiary border-brand-secondary border border-dashed border-8 text-center h-96">
        This is the start of the Skills component.
      </div>
    </div>
  )
}

export default Skills;