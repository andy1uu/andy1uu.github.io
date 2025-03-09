import baseAPI from "../api/api";

const create = () => {
  return baseAPI.post("/education");
};

const getEducation = () => {
  return baseAPI.get("/education");
};

const getEducationByID = (educationID: string) => {
  return baseAPI.get(`/education/${educationID}`);
};

const EducationAPI = {
  create,
  getEducation,
  getEducationByID,
};

export default EducationAPI;
