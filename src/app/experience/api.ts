import baseAPI from "../api/api";

const getExperience = () => {
  return baseAPI.get("/experience");
};

const getExperienceByID = (experienceID: string) => {
  return baseAPI.get(`/experience/${experienceID}`);
};

const ExperienceAPI = {
  getExperience,
  getExperienceByID,
};

export default ExperienceAPI;
