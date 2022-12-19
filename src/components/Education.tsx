import React from "react";
import "../styles/components/Education.css";

/* type Link = {
  label: string;
  url: string;
}; */

type educationProps = {

};

const Education = (props: educationProps) => {

  return (
    <div id="Education" className="Education">
      <div className="Education-container bg-brand-tertiary border-brand-secondary border border-dashed border-8 text-center h-96">
        This is the start of the Education component.
      </div>
    </div>
  )
}

export default Education;