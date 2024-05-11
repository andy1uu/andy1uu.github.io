import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import React from "react";

const NavBarExpander = ({
  expanded,
  setExpanded,
}: {
  expanded: boolean;
  setExpanded: Function;
}) => {
  if (!expanded) {
    return (
      <button
        onClick={() => setExpanded(true)}
        aria-label="Expand"
        color="default"
        className="mx-1 w-5 md:hidden">
        <FaAngleRight size={24} className=" text-dark dark:text-light" />
      </button>
    );
  }

  if (expanded) {
    return (
      <button
        onClick={() => setExpanded(false)}
        aria-label="Unexpand"
        color="default"
        className="mx-1 w-10 md:hidden">
        <FaAngleLeft size={48} className=" text-dark dark:text-light" />
      </button>
    );
  }
};

export default NavBarExpander;
