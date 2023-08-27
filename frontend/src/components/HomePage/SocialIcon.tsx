import * as React from "react";

type SocialIconProps = {
  icon: JSX.Element;
  link: string;
};

const SocialIcon = ({ icon, link }: SocialIconProps) => (
  <a
    className="SocialIcon group flex h-16 w-16 items-center justify-center rounded-full bg-primary text-lightText shadow-lg"
    href={link}
    target="_blank"
    rel="noreferrer">
    {icon}
  </a>
);

export default SocialIcon;
