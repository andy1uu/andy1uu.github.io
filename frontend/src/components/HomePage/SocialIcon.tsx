import * as React from "react";
import { IconType } from "react-icons";

type SocialIconProps = {
  icon: JSX.Element;
  link: string;
};

const SocialIcon = ({ icon, link }: SocialIconProps) => {
  return (
    <a
      className="SocialIcon flex items-center justify-center h-16 w-16 shadow-lg bg-primary text-lightText rounded-full group"
      href={link}
      target="_blank"
    >
      {icon}
    </a>
  );
};

export default SocialIcon;