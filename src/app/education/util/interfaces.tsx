import { ObjectId } from "mongodb";

type Extracirricular = {
  name: string;
  affiliation: string;
};

type Course = {
  name: string;
  professor: string;
};

type CourseWork = {
  semester: string;
  courses: Course[];
};

export type Education = {
  _id: ObjectId;
  institution: string;
  degreeType: string;
  gpa: number;
  location: string;
  major: string;
  courseWork: CourseWork[];
  extracirriculars: Extracirricular[];
  endTime: string;
  startTime: string;
};
