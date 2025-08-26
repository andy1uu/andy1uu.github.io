import baseAPI from "../api";

const getEducation = () => baseAPI.get("/education");

const getEducationById = (educationId: string) =>
  baseAPI.get(`/education/${educationId}`);

const EducationAPI = {
  getEducation,
  getEducationById,
};

export default EducationAPI;
