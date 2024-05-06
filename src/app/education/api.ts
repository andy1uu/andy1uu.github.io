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

const updateEducationByID = (educationID: string) => {
  return baseAPI.put(`/education/${educationID}`);
};

const deleteEducationByID = (educationID: string) => {
  return baseAPI.delete(`/education/${educationID}`);
};

const deleteEducation = () => {
  return baseAPI.delete(`/education`);
};

const EducationAPI = {
  create,
  getEducation,
  getEducationByID,
  updateEducationByID,
  deleteEducationByID,
  deleteEducation,
};

export default EducationAPI;
