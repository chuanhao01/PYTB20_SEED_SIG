import { authHeader } from "../_helpers";
import { userService } from "./user.service";
// import { eventService } from "./event.service";

export const signupService = {
  // getAllSignUps,
  getSignUpsByEventId,
  createSignUp,
  updateSignUp,
  deleteSignUp,
};

// function getAllSignUps() {
//   const requestOptions = {
//     method: "GET",
//     headers: authHeader()
//   };

//   return fetch(`${process.env.VUE_APP_API_URL}/events`, requestOptions).then(
//     userService.handleResponse
//   );
// }

function getSignUpsByEventId(event_id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(
    `${process.env.VUE_APP_API_URL}/events/${event_id}/signups`,
    requestOptions
  ).then(userService.handleResponse);
}

function createSignUp(event_id) {
    const requestOptions = {
        method: "POST",
        headers: authHeader(),
        body: JSON.stringify(event_id)
      };
    
      return fetch(
        `${process.env.VUE_APP_API_URL}/events/${event_id}/signups`,
        requestOptions
      ).then(handleResponse);
}

function updateSignUp(user_id, event_id) {
    const requestOptions = {
        method: "PUT",
        headers: { ...authHeader(), "Content-Type": "application/json" },
        body: JSON.stringify(user_id, event_id)
      };
    
      return fetch(
        `${process.env.VUE_APP_API_URL}/events/${event_id}/signups`,
        requestOptions
      ).then(handleResponse);
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
