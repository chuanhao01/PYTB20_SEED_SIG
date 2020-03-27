import { authHeader } from "../_helpers";
import { userService } from "./user.service";

export const eventService = {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
}

function getAllEvents() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };

  return fetch(`${process.env.VUE_APP_API_URL}/events`, requestOptions).then(
    handleResponse
  );
}

function getEventById(event_id) {
  const requestOptions = {
    method: "GET"
  };

  return fetch(`${process.env.VUE_APP_API_URL}/events/${event_id}`, requestOptions)
    .then(response => JSON.parse(response.text()))
    .catch(e => console.log(e));
}

function createEvent(event) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event)
  };

  return fetch(
    `${process.env.VUE_APP_API_URL}/events`,
    requestOptions
  ).then(handleResponse);
}

function updateEvent(event) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(event)
  };

  return fetch(
    `${process.env.VUE_APP_API_URL}/events/${event.event_id}`,
    requestOptions
  ).then(handleResponse);
}

function deleteEvent(event_id) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader()
  };

  return fetch(
    `${process.env.VUE_APP_API_URL}/events/${event_id}`,
    requestOptions
  ).then(handleResponse);
}

function handleResponse(response) {
  // console.log(response.text() && JSON.parse(response.text()));

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