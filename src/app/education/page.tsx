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
    <section className="Education flex w-full items-center justify-center bg-light dark:bg-dark p-8">
      {education.map((edu) => {
        return (
          <div key={edu._id as unknown as string}>
            {edu.major}
            {edu.institution}
            {edu.degreeType}
            {edu.gpa}
            {edu.location}
            {edu.courseWork.map((sem) => {
              return (
                <div key={sem.semester}>
                  {sem.semester}
                  {sem.courses.map((course) => {
                    return <div key={course}>{course}</div>;
                  })}
                </div>
              );
            })}
            {edu.startTime}
            {edu.endTime}
            {edu.extracirriculars.map((extracirricular) => {
              return <div key={extracirricular}>{extracirricular}</div>;
            })}
          </div>
        );
      })}
    </section>
  );
};

export default Education;
