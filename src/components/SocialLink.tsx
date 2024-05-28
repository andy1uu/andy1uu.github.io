"use client";

import React, { ReactNode } from "react";

const SocialLink = ({
  link,
  icon,
}: {
  link: string;
  icon: ReactNode;
}) => {
  return (
    <a
      href={link}
      color="default"
      className="SocialLink">
      {icon}
    </a>
  );
};

export default SocialLink;
