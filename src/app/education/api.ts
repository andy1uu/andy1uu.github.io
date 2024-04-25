import baseAPI from "../api/api";
import Education from "./page";

const create = (data: Education) => {
  return baseAPI.post("/education", data);
};

const getEducation = () => {
  return baseAPI.get("/education");
};

const getEducationByID = (educationID: string) => {
  return baseAPI.get(`/education/${educationID}`);
};

const updateEducationByID = (educationID: string, data: Education) => {
  return baseAPI.put(`/education/${educationID}`, data);
};

const removeEducationByID = (educationID: string) => {
  return baseAPI.delete(`/education/${educationID}`);
};

const EducationAPI = {
  create,
  getEducation,
  getEducationByID,
  updateEducationByID,
  removeEducationByID,
};

export default EducationAPI;
