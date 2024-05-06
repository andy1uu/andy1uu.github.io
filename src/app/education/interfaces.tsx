interface CourseWork {
  semester: string;
  courses: string[];
}

export interface Education {
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
