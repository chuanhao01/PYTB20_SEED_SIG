import axios from "axios";

export const userService = {
  login,
  register,
  getUser,
  updateUser
};

function login(email) {
  return axios
    .post("/api/login", { email: email })
    .then(result => {
      console.log(result);
      console.log("login success");
      return result;
    })
    .catch(error => {
      console.error(error);
    });
}

function register(user) {
  return axios
    .post("/api/users", user)
    .then(result => {
      console.log("register success");
      return result;
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
}

function getUser() {
  return axios
    .get("/api/users/u")
    .then(result => {
      console.log(result);
      return result;
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
}

function updateUser(user) {
  return axios
    .put("/api/users/u", user)
    .then(result => {
      console.log(result);
      return result;
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
}
