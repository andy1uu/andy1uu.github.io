import React from "react";
import "../styles/components/Projects.css";

/* type Link = {
  label: string;
  url: string;
}; */

type projectsProps = {

};

const Projects = (props: projectsProps) => {

  return (
    <div id="Projects" className="Projects">
      <div className="Projects-container bg-brand-tertiary border-brand-secondary border border-dashed border-8 text-center h-96">
        This is the start of the Projects component.
      </div>
    </div>
  )
}

export default Projects;