import * as React from "react";
import SocialIcon from "./SocialIcon";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram
} from "react-icons/fa6";

const HomePage = () => (
  <div className="HomePage flex flex-col lg:flex-row">
    <div className="HomePage-TextContainer flex flex-col p-8 lg:w-1/2 xl:h-full">
      <div className="HomePage-Title mb-8 text-lg font-medium lg:text-xl">
        <div className="HomePage-TitleIntro">{"Hey, I'm"}</div>
        <div className="HomePage-TitleName text-6xl text-primary lg:text-8xl">
          Andy Luu
        </div>
      </div>
      <div className="HomePage-Headline mb-4 text-2xl lg:mb-8 lg:text-4xl">
        A Graduate Researcher & Software Developer.
      </div>
      <div className="HomePage-Description mb-4 leading-8 lg:mb-8 lg:text-lg xl:mb-12">
        {
          "I am a first-year graduate student studying Computer Science planning on graduating in May 2024 with a Master's of Science. I am currently seeking summer internships or full time opportunities."
        }
      </div>
      <div className="HomePage-SocialsContainer flex flex-wrap justify-evenly">
        <SocialIcon
          icon={<FaGithub size={36} />}
          link="https://github.com/andy1uu"
        />
        <SocialIcon
          icon={<FaLinkedinIn size={36} />}
          link="https://www.linkedin.com/in/andyluu324/"
        />
        <SocialIcon
          icon={<FaFacebook size={36} />}
          link="https://www.facebook.com/andy1uu"
        />
        <SocialIcon
          icon={<FaInstagram size={36} />}
          link="https://www.instagram.com/andy.1uu/"
        />
      </div>
    </div>
    <img
      className="HomePage-Image mx-auto mb-4 flex h-64 w-64 md:h-[32rem] md:w-[32rem] lg:p-8 xl:h-[40rem] xl:w-[40rem]"
      src="/images/Andy_Luu_Profile_Picture.png"
      alt="Andy Luu Profile Picture"
    />
  </div>
);

export default HomePage;
