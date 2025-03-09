import { ObjectId } from "mongodb";

export interface Experience {
  _id: ObjectId;
  company: string;
  title: string;
  location: string;
  endTime: string;
  startTime: string;
  responsibilities: string[],
  skills: string[],
}
