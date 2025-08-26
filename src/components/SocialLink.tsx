"use client";

import React, { ReactNode } from "react";

const SocialLink = ({ link, icon }: { link: string; icon: ReactNode }) => (
  <a href={link} color="default" className="SocialLink">
    {icon}
  </a>
);

export default SocialLink;
