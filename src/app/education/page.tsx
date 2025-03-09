import React from "react";
import type { Metadata } from "next";
import EducationAPI from "./api";
import type { Education } from "./interfaces";

async function getData() {
  return await EducationAPI.getEducation().then((response) => {
    return response.data;
  });
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "This is a base site for Andy to create his websites.",
};

const Education = async () => {
  const education: Education[] = await getData();

  return (
    <section className="Education-container flex w-full flex-col gap-4 items-center justify-center bg-light p-8 dark:bg-dark">
      {education.map((edu) => {
        return (
          <div
            key={edu._id as unknown as string}
            className="Education w-full rounded-xl border border-primary border-2 p-4 xl:w-4/5 2xl:w-3/5">
            <h1 className="text-2xl font-semibold text-primary">
              {edu.institution}
            </h1>
            <h2 className="text-secondary dark:text-tertiary text-xl font-semibold">
              {edu.degreeType}
            </h2>
            <h3 className="text-lg font-medium">{edu.major}</h3>
            <p>
              {edu.startTime} - {edu.endTime}
            </p>
            <p>{edu.location}</p>
            <p>GPA: {(edu.gpa).toFixed(2)}/4.00</p>
          </div>
        );
      })}
    </section>
  );
};

export default Education;
