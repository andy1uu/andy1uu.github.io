import React from "react";
import "../styles/components/Awards.css";

/* type Link = {
  label: string;
  url: string;
}; */

type awardsProps = {

};

const Awards = (props: awardsProps) => {

  return (
    <div id="Awards" className="Awards">
      <div className="Awards-container bg-brand-tertiary border-brand-secondary border border-dashed border-8 text-center h-96">
        This is the start of the Awards component.
      </div>
    </div>
  )
}

export default Awards;