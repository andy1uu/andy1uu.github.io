import { ObjectId } from "mongodb";

interface Extracirricular {
  name: string;
  affiliation: string;
}

interface Course {
  name: string;
  professor: string;
}

interface CourseWork {
  semester: string;
  courses: Course[];
}

export interface Education {
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
}
