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

function createSignUp(user_id, event_id) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user_id, event_id)
      };
    
      return fetch(
        `${process.env.VUE_APP_API_URL}/events/${event_id}/signups`,
        requestOptions
      ).then(userService.handleResponse);
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
      ).then(userService.handleResponse);
}

function deleteSignUp(user_id, event_id) {
    const requestOptions = {
        method: "DELETE",
        headers: authHeader()
      };
    
      return fetch(
        `${process.env.VUE_APP_API_URL}/events/${event_id}/signups`,
        requestOptions
      ).then(userService.handleResponse);
}
