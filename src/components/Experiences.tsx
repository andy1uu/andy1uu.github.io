import React from "react";
import "../styles/components/Experiences.css";

/* type Link = {
  label: string;
  url: string;
}; */

type experiencesProps = {

};

const Experiences = (props: experiencesProps) => {

  return (
    <div id="Experiences" className="Experiences">
      <div className="Experiences-container bg-brand-tertiary border-brand-secondary border border-dashed border-8 text-center h-96">
        This is the start of the Experiences component.
      </div>
    </div>
  )
}

export default Experiences;