import * as React from "react";

type NavBarIconProps = {
  icon: JSX.Element;
  text: string;
  link: string;
};

const NavBarIcon = ({ icon, text, link }: NavBarIconProps) => (
  <a
    className="group relative mx-auto my-2 flex h-12 w-12 items-center justify-center rounded-3xl bg-primary text-lightText shadow-lg transition-all duration-300 ease-linear hover:rounded-xl hover:bg-secondary hover:text-primary"
    href={link}>
    {icon}

    <div className="absolute left-14 m-2 w-auto min-w-max origin-left scale-0 rounded-md bg-secondary p-2 font-bold text-primary shadow-md transition-all duration-100 group-hover:scale-100">
      {text}
    </div>
  </a>
);

export default NavBarIcon;
