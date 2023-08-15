import * as React from "react";
import { IconType } from "react-icons";

type NavBarIconProps = {
  icon: JSX.Element;
  text: string;
};

const NavBarIcon = ({ icon, text }: NavBarIconProps) =>{
  return (
    <a className="relative flex items-center justify-center h-12 w-12 my-2 mx-auto shadow-lg bg-gray-900 text-accent rounded-3xl transition-all duration-300 ease-linear hover:bg-accent hover:text-white hover:rounded-xl group" href="/education">
      {icon}

      <div className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-accent bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
        {text}
      </div>
    </a>
  );
};

export default NavBarIcon;