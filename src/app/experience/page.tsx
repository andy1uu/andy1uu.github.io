import React from "react";
import type { Metadata } from "next";
import ExperienceAPI from "../api/experience/api";
import type { Experience } from "./util/interfaces";
import ExperienceCard from "./components/experienceCard";

async function getData() {
  return await ExperienceAPI.getExperience().then((response) => {
    return response.data;
  });
}

export const metadata: Metadata = {
  title: "Andy Luu's Work Experience",
  description: "These are the companies that Andy has worked at.",
};

const Experience = async () => {
  const experiences: Experience[] = await getData();

  return (
    <section className="Experience-container pl-[104px] flex w-full flex-col gap-4 items-center justify-center bg-light p-8 dark:bg-dark">
      {experiences.map((experience) => {
        return (
          <ExperienceCard             
            key={experience._id.toString()}
            company={experience.company}
            title={experience.title} location={experience.location}
            endTime={experience.endTime}
            startTime={experience.startTime}
            responsibilities={experience.responsibilities}
            skills={experience.skills}          />
        );
      })}
    </section>
  );
};

export default Experience;