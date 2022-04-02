import http from "./service";

const getAll = () => {
  return http.get("/projection/all");
};

const get = (career) => {
  return http.get(`/projection/${career}`);
};

const ProjectionService = {
  getAll,
  get,
};

export default ProjectionService;
