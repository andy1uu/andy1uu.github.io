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
        className={`flex justify-start gap-2 rounded-lg p-3 hover:bg-light dark:hover:bg-dark md:hidden md:w-full ${expanded ? "w-full" : "w-12"}`}>
        <FaAngleRight size={24} className="my-auto text-dark dark:text-light" />
        {
          <div
            className={`my-auto text-xl font-semibold md:block ${expanded ? "block" : "hidden"}`}>
            Expand
          </div>
        }
      </button>
    );
  }

  if (expanded) {
    return (
      <button
        onClick={() => setExpanded(false)}
        aria-label="Condense"
        color="default"
        className={`flex justify-start gap-2 rounded-lg p-3 hover:bg-light dark:hover:bg-dark md:hidden md:w-full ${expanded ? "w-full" : "w-12"}`}>
        <FaAngleLeft size={24} className="my-auto text-dark dark:text-light" />
        {
          <div
            className={`my-auto text-xl font-semibold md:block ${expanded ? "block" : "hidden"}`}>
            Condense
          </div>
        }
      </button>
    );
  }
};

export default NavBarExpander;
