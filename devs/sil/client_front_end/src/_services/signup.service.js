import { authHeader } from "../_helpers";
import { userService } from "./user.service";
import axios from 'axios';
// import { eventService } from "./event.service";

export const signupService = {
  // getAllSignUps,
  createSignUp,
  deleteSignUp
};

function createSignUp(event_id) {
  return axios
    .post(`/api/events/${event_id}/signups`)
    .then(result => {
      /* eslint-disable */
      console.log(result);
      /* eslint-disable */
      console.log("volunteer success");
      return result;
    })
    .catch(error => {
      /* eslint-disable */
      console.error(error);
    });
}

function deleteSignUp(user_id, event_id) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader()
  };

  return fetch(
    `${process.env.VUE_APP_API_URL}/events/${event_id}/signups`,
    requestOptions
  ).then(handleResponse);
}

function handleResponse(response) {
  console.log(response);
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        userService.logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
