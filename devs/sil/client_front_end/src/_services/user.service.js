import axios from "axios";

export const userService = {
  login,
  logout,
  register,
  getUser
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

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
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
  console.log("hello");
}
