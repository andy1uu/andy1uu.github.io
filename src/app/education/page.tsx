import React from "react";
import type { Metadata } from "next";
import EducationAPI from "../api/education/api";
import type { Education } from "./util/interfaces";
import EducationCard from "./components/educationCard";

async function getData() {
  return await EducationAPI.getEducation().then((response) => {
    return response.data;
  });
}

export const metadata: Metadata = {
  title: "Andy Luu's Education",
  description: "These are the schools that Andy has graduated from.",
};

const Education = async () => {
  const education: Education[] = await getData();

  return (
    <section className="Education-container pl-[104px] flex w-full flex-col gap-4 items-center justify-center bg-light p-8 dark:bg-dark">
      {education.map((edu) => {
        return (
          <EducationCard 
            key={edu._id.toString()} 
            institution={edu.institution} 
            degreeType={edu.degreeType} 
            gpa={edu.gpa} 
            location={edu.location} 
            major={edu.major} 
            courseWork={edu.courseWork} 
            extracirriculars={edu.extracirriculars} 
            endTime={edu.endTime} 
            startTime={edu.startTime} 
          />
        );
      })}
    </section>
  );
};

export default Education;
