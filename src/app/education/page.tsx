import React from "react";
import { ObjectId } from "mongodb";
import type { Metadata } from "next";
import EducationAPI from "./api";

async function getData() {
  return await EducationAPI.getEducation().then((response) => {
    return response.data.education; 
  });
}

interface CourseWork {
  semester: string;
  courses: string[];
}

interface Education {
  _id: ObjectId;
  institution: string;
  degreeType: string;
  gpa: number;
  location: string;
  major: string;
  courseWork: CourseWork[];
  extracirriculars: string[];
  endTime: string;
  startTime: string;
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "This is a base site for Andy to create his websites.",
};

const Education = async () => {

  const education: Education[] = await getData();

  return (
    <section className="About flex min-h-screen w-full items-center justify-center bg-light dark:bg-dark">
      {education.map((edu) => {
        return (
          <div key={edu._id}>
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
