"use client";

import React from "react";

import SocialLink from "@/components/SocialLink";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { MdEmail, MdFacebook } from "react-icons/md";

import { motion } from "framer-motion";

const iconSize = 64;

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
    icon: <MdFacebook size={iconSize} />,
  },
  {
    keyProp: "gmail",
    link: "mailto:andyluu324@gmail.com",
    icon: <MdEmail size={iconSize} />,
  },
];

const Home = () => (
  <section className="Homepage flex flex-grow">
    <div className="Homepage-container flex flex-col xl:flex-row w-full gap-12 xl:w-9/10 xl:mx-auto">
      <div className="Homepage-textAndSocials align-self-center flex flex-col gap-12 w-full px-16 pt-16 xl:my-auto xl:w-1/2">
        <motion.p
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeIn" }}
          className="Homepage-begin font-semibold text-4xl text-center xl:text-left">
          Hello World! I&apos;m
        </motion.p>
        <motion.h2
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.2, ease: "easeIn" }}
          className="Homepage-name font-extrabold text-primary text-7xl text-center xl:text-left">
          <a href="/">Andy Luu</a>
        </motion.h2>
        <motion.h3
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.4, ease: "easeIn" }}
          className="Homepage-title font-bold text-4xl text-secondary dark:text-tertiary text-center xl:text-left">
          I&apos;m a Software Engineer focusing in HCI & FinTech!
        </motion.h3>
        <motion.p
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.6, ease: "easeIn" }}
          className="Homepage-description font-semibold text-2xl text-center xl:text-left">
          I design digital interfaces for all different types of software while
          researching novel HCI solutions.
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.8, ease: "easeIn" }}
          className="Homepage-social w-full text-center xl:text-left flex flex-col gap-8 text-secondary dark:text-tertiary">
          <div className="Homepage-socialTitle font-extrabold text-5xl">
            Lets Connect!
          </div>
          <div className="Homepage-socialLinks flex gap-2 w-fit mx-auto xl:ml-0">
            {socialLinks.map((socialLink) => (
              <SocialLink
                key={socialLink.keyProp}
                link={socialLink.link}
                icon={socialLink.icon}
              />
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeIn" }}
        className="Homepage-imageContainer xl:my-auto w-full xl:w-1/2">
        <Image
          src="/Profile_Luu_Andy_Square.jpg"
          width={2048}
          height={2048}
          alt="Picture of Andy Luu"
          className="Homepage-image rounded-full w-[400px] h-[400px] mx-auto xl:w-[500px] xl:h-[500px] 2xl:w-[700px] 2xl:h-[700px] border-8 border-primary"
        />
      </motion.div>
    </div>
  </section>
);

export default Home;
