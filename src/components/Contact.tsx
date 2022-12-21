import React from "react";
import "../styles/components/Contact.css";

/* type Link = {
  label: string;
  url: string;
}; */

type contactProps = {

};

const Contact = (props: contactProps) => {

  return (
    <div id="Contact" className="Contact">
      <div className="Contact-container bg-brand-tertiary border-brand-secondary border border-dashed border-8 text-center h-96">
        This is the start of the Contact component.
      </div>
    </div>
  )
}

export default Contact;