import baseAPI from "../api/api";

const getEducation = () => {
  return baseAPI.get("/education");
};

const getEducationByID = (educationID: string) => {
  return baseAPI.get(`/education/${educationID}`);
};

const EducationAPI = {
  getEducation,
  getEducationByID,
};

export default EducationAPI;
