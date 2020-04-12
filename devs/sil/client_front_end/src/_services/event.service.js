import { authHeader } from "../_helpers";
// import { userService } from "./user.service";
import axios from "axios";

export const eventService = {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  filterEvents
};

function getAllEvents() {
  return axios
    .get("http://localhost:8081/api/events", { withCredentials: true })
    .then(handleResponse)
    .catch(e => console.log(e));
}

function getEventById(event_id) {
  return axios
    .get(`http://localhost:8081/api/events/${event_id}`)
    .then(handleResponse)
    .catch(e => console.log(e));
}

function createEvent(event) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event)
  };

  return fetch(`${process.env.VUE_APP_API_URL}/events`, requestOptions).then(
    handleResponse
  );
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

function filterEvents(filter, events) {
  let filteredList = [...events];

  // Filter status
  if (filter.status !== "all") {
    const filtered = filteredList.filter(
      event => event.status === filter.status
    );
    filteredList = filtered;
  }

  return filteredList;
}

function handleResponse(response) {
  return response.data;
}
