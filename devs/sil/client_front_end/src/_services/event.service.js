// @ts-nocheck
// import { userService } from "./user.service";
import axios from "axios";

export const eventService = {
  getAllEvents,
  getEventById,
  filterEvents
};

function getAllEvents() {
  return axios
    .get("api/events")
    .then(handleResponse)
    /* eslint-disable */
    .catch(e => console.log(e));
}

function getEventById(event_id) {
  return axios
    .get(`api/events/${event_id}`)
    .then(handleResponse)
    /* eslint-disable */
    .catch(e => console.log(e));
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
  console.log(response.data)
  return response.data;
}
