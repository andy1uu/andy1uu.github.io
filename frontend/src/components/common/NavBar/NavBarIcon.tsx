import * as React from "react";
import { IconType } from "react-icons";

type NavBarIconProps = {
  icon: JSX.Element;
  text: string;
  link: string;
};

const NavBarIcon = ({ icon, text, link }: NavBarIconProps) =>{
  return (
    <a
      className="relative flex items-center justify-center h-12 w-12 my-2 mx-auto shadow-lg bg-primary text-lightText rounded-3xl transition-all duration-300 ease-linear hover:bg-secondary hover:text-primary hover:rounded-xl group"
      href={link}
    >
      {icon}

      <div className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-primary bg-secondary font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
        {text}
      </div>
    </a>
  );
};

export default NavBarIcon;