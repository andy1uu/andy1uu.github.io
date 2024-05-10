"use client";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import React from "react";
import { Button } from "@nextui-org/react";

const NavBarExpander = ({
  expanded,
  setExpanded,
}: {
  expanded: boolean;
  setExpanded: Function;
}) => {
  if (!expanded) {
    return (
      <Button
        isIconOnly={true}
        disableRipple={true}
        disableAnimation={true}
        onPress={() => setExpanded(true)}
        aria-label="Expand"
        color="default"
        className="h-full w-5 md:hidden">
        <FaAngleRight size={24} className=" text-dark dark:text-light" />
      </Button>
    );
  }

  if (expanded) {
    return (
      <Button
        disableRipple={true}
        disableAnimation={true}
        isIconOnly={true}
        onPress={() => setExpanded(false)}
        aria-label="Unexpand"
        color="default"
        className="h-full w-10 md:hidden">
        <FaAngleLeft size={48} className=" text-dark dark:text-light" />
      </Button>
    );
  }
};

export default NavBarExpander;
