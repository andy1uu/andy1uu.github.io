import NavBarIcon from "./NavBarIcon";
import { FaHouseChimney, FaUserLarge, FaGraduationCap } from "react-icons/fa6";

const NavBar = () => {
  return (
    <div className="NavBar top-0 left-0 w-16 lg:flex flex-col bg-darkBackground shadow-lg">
      <NavBarIcon icon={<FaHouseChimney size={24} />} text="Home" link="" />
      <NavBarIcon icon={<FaUserLarge size={24} />} text="About" link="about" />
      <NavBarIcon
        icon={<FaGraduationCap size={24} />}
        text="Education"
        link="education"
      />
    </div>
  );
};

export default NavBar;
