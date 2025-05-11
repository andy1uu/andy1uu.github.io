import baseAPI from "../api";

const getEducation = () => {
  return baseAPI.get("/education");
};

const getEducationById = (educationId: string) => {
  return baseAPI.get(`/education/${educationId}`);
};

const EducationAPI = {
  getEducation,
  getEducationById,
};

export default EducationAPI;
