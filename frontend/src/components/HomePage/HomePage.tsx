import SocialIcon from "./SocialIcon";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className="HomePage flex flex-col lg:flex-row">
      <div className="HomePage-TextContainer flex flex-col p-8 lg:w-1/2 xl:h-full">
        <div className="HomePage-Title text-lg lg:text-xl font-medium mb-8">
          <div className="HomePage-TitleIntro">Hey, I'm</div>
          <div className="HomePage-TitleName text-6xl lg:text-8xl text-primary">
            Andy Luu
          </div>
        </div>
        <div className="HomePage-Headline text-2xl lg:text-4xl mb-4 lg:mb-8">
          A Graduate Researcher & Software Developer.
        </div>
        <div className="HomePage-Description leading-8 lg:text-lg mb-4 lg:mb-8 xl:mb-12">
          I am a first-year graduate student studying Computer Science planning
          on graduating in May 2024 with a Master's of Science. I am currently
          seeking summer internships or full time opportunities.
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
        className="HomePage-Image flex mx-auto w-64 h-64 mb-4 md:w-[32rem] md:h-[32rem] lg:p-8 xl:w-[40rem] xl:h-[40rem]"
        src="/images/Andy_Luu_Profile_Picture.png"
        alt="Andy Luu Profile Picture"
      />
    </div>
  );
};

export default HomePage;
