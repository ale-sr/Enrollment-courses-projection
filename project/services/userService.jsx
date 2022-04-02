import http from "./service";

const getAll = () => {
  return http.get("/user/all");
};

const get = (id) => {
  return http.get(`/user/${id}`);
};

const create = (data) => {
  return http.post("/user", data);
};

const update = (id, data) => {
  return http.put(`/user/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/user/${id}`);
};

const getCurrentUser = () => {
    return http.get("/user/me");
  };

const UserService = {
  getAll,
  get,
  create,
  update,
  remove,
  getCurrentUser,
};

export default UserService;