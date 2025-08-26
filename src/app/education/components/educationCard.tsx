import React from "react";
import { Education } from "../util/interfaces";

const EducationCard: React.FC<Education> = ({
  institution,
  degreeType,
  gpa,
  location,
  major,
  _courseWork,
  _extracirriculars,
  endTime,
  startTime,
}: Education) => (
  <div
    className="flex flex-col md:flex-row items-center shadow-md
    shadow-primary text-dark dark:text-light 
     w-full lg:w-3/5 mx-auto h-auto rounded-xl 
    transition-all ease-in-out duration-500 p-4 gap-2 border-primary border overflow-auto">
    <img
      className="w-16 rounded-md mr-auto md:mr-0 md:mb-auto"
      src={`${institution}.jpg`}
      alt={institution}
    />

    <div className="w-full flex flex-col">
      <h1 className="text-2xl ease-in-out duration-1000 font-bold text-primary">
        {degreeType} in {major}
      </h1>
      <h2 className="text-lg ease-in-out duration-1000 font-semibold text-secondary">
        {institution}
      </h2>
      <p className="text-md">
        {startTime} - {endTime}
      </p>
      <p className="text-md">{location}</p>
      <p className="text-md">GPA: {gpa.toFixed(2)}/4.00</p>
    </div>
  </div>
);

export default EducationCard;
