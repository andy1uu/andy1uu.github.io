import baseAPI from "../api";

const getExperience = () => baseAPI.get("/experience");

const getExperienceById = (experienceId: string) =>
  baseAPI.get(`/experience/${experienceId}`);

const ExperienceAPI = {
  getExperience,
  getExperienceById,
};

export default ExperienceAPI;
