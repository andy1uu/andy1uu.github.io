import React from "react";
import type { Metadata } from "next";
import ExperienceAPI from "./api";
import type { Experience } from "./interfaces";

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
          <div
            key={experience._id as unknown as string}
            className="Experience w-full rounded-xl border border-primary border-2 p-4 xl:w-4/5 2xl:w-3/5">
            <h1 className="text-2xl font-semibold text-primary">
              {experience.title}
            </h1>
            <h2 className="text-secondary dark:text-tertiary text-xl font-semibold">
              {experience.company}
            </h2>
            <p>
              {experience.startTime} - {experience.endTime}
            </p>
            <p>{experience.location}</p>
            <ul className="list-disc">
            {experience.responsibilities.map((responsibility) => {return (<li className="list-inside">{responsibility}</li>)})}
            </ul>
            <ul className="list-disc">
            {experience.skills.map((skill) => {return (<li className="list-inside">{skill}</li>)})}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default Experience;