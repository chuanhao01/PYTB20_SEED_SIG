import axios from "axios";

export const userService = {
  getUser,
  updateUser
};

function getUser(user_id) {
  return axios
    .get(`/api/users/${user_id}`)
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
    .put(`/api/users/${user.user_id}`, user)
    .then(result => {
      console.log("user info updated");
      return result;
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
}
