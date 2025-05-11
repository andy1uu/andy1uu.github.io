import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa6";
import SocialLink from "@/components/SocialLink";

export const metadata: Metadata = {
  title: "Andy Luu's Personal Portfolio Website",
  description: "This is a personal portfolio website for Andy Luu to show off his accomplishments.",
};

const iconSize = 48;

const socialLinks = [
  {
    keyProp: "github",
    link: "https://github.com/andy1uu",
    icon: <FaGithub size={iconSize} />,
  },
  {
    keyProp: "linkedin",
    link: "https://www.linkedin.com/in/andyluu324/",
    icon: <FaLinkedin size={iconSize} />,
  },
  {
    keyProp: "instagram",
    link: "https://www.instagram.com/andy.1uu/",
    icon: <FaInstagram size={iconSize} />,
  },
  {
    keyProp: "facebook",
    link: "https://www.facebook.com/andy1uu/",
    icon: <FaFacebook size={iconSize} />,
  },
  {
    keyProp: "gmail",
    link: "mailto:andyluu324@gmail.com",
    icon: <FaEnvelope size={iconSize} />,
  },
];

const Home = () => {
  return (
    <section className="Homepage pl-[104px] flex w-full flex-col bg-light p-8 text-primary gap-8 dark:bg-dark">
      <div className="Homepage-textAndSocial flex flex-col justify-center 2xl:w-[720px] mx-auto">
        <div className="Homepage-begin mb-2 text-xl text-dark dark:text-light lg:text-2xl">
          Hello World! I'm
        </div>
        <h1 className="Homepage-name mb-3 text-5xl font-bold lg:text-7xl">
          <a href="/">Andy Luu!</a>
        </h1>
        <div className="Homepage-title mb-2 text-2xl font-medium lg:text-4xl text-secondary dark:text-tertiary">
          I am a Software Engineer and HCI Researcher!
        </div>
        <p className="Homepage-description mb-2 text-dark dark:text-light lg:text-xl">
          I design digital interfaces for all different types of software while
          researching novel HCI solutions.
        </p>
        <div className="Homepage-social">
          <div className="Homepage-socialTitle mb-2 text-2xl font-medium lg:text-4xl">
            Lets Connect!
          </div>
          <div className="Homepage-socialLinks flex flex-wrap gap-4">
            {socialLinks.map((socialLink) => {
              return (
                <SocialLink
                  key={socialLink.keyProp}
                  link={socialLink.link}
                  icon={socialLink.icon}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Image
        src="/Profile_Luu_Andy_Square.jpg"
        width={2048}
        height={2048}
        alt="Picture of Andy Luu"
        className="Homepage-image mx-auto my-4 mb-4 w-3/4 rounded-full lg:h-[512px] lg:w-[512px] xl:my-auto 2xl:h-[720px] 2xl:w-[720px]"
      />
    </section>
  );
};

export default Home;
