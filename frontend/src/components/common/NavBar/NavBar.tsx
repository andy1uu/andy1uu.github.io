import * as React from "react";
import NavBarIcon from "./NavBarIcon";
import { FaHouseChimney } from "react-icons/fa6";

const NavBar = () => (
  <div className="NavBar left-0 top-0 w-16 flex-col bg-darkBackground shadow-lg lg:flex">
    <NavBarIcon icon={<FaHouseChimney size={24} />} text="Home" link="" />
    {/*     <NavBarIcon icon={<FaUserLarge size={24} />} text="About" link="about" />
    <NavBarIcon
      icon={<FaGraduationCap size={24} />}
      text="Education"
      link="education"
    /> */}
  </div>
);

export default NavBar;
