import NavBarIcon from "./NavBarIcon";
import { HiAcademicCap } from "react-icons/hi2";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 lg:flex flex-col bg-gray-700 text-white shadow-lg hidden">
      <NavBarIcon icon={<HiAcademicCap size={24}/>} text="Education" />
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
    </div>
  );
};

export default NavBar;
