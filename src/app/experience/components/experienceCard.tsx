import React from "react";
import { Experience } from "../util/interfaces";
import Chip from "@/components/Chip";

const ExperienceCard: React.FC<Experience> = ({
  company,
  title,
  location,
  endTime,
  startTime,
  responsibilities,
  skills,
}: Experience) => (
  <div
    className="flex flex-col md:flex-row items-center shadow-md
    shadow-primary text-dark dark:text-light 
     w-full lg:w-4/5 xl:w-3/5 mx-auto h-auto rounded-xl 
    transition-all ease-in-out duration-500 p-4 gap-2 border-primary border">
    <img
      className="w-16 rounded-md mr-auto md:mr-0 md:mb-auto"
      src={`${company}.jpg`}
      alt={company}
    />

    <div className="w-full flex flex-col">
      <h1 className="text-2xl ease-in-out duration-1000 font-bold text-primary">
        {title}
      </h1>
      <h2 className="text-lg ease-in-out duration-1000 font-semibold text-secondary">
        {company}
      </h2>
      <p className="text-md">
        {startTime} - {endTime}
      </p>
      <p className="text-md">{location}</p>
      <div className="w-full flex gap-2 my-2 flex-wrap">
        {skills.map((skill) => (
          <Chip key={skill} text={skill} />
        ))}
      </div>
      <ul className="w-full list-disc ml-4 pr-2">
        {responsibilities.map((responsibility) => (
          <li className="w-full text-wrap" key={responsibility}>
            <p>{responsibility}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ExperienceCard;
