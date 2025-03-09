import baseAPI from "../api/api";

const getExperience = () => {
  return baseAPI.get("/experience");
};

const getExperienceById = (experienceId: string) => {
  return baseAPI.get(`/experience/${experienceId}`);
};

const ExperienceAPI = {
  getExperience,
  getExperienceById,
};

export default ExperienceAPI;
