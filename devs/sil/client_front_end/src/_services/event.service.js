// @ts-nocheck
// import { userService } from "./user.service";
import axios from "axios";

export const eventService = {
  getAllEvents,
  getSignedUpEvents,
  getNotSignedUpEvents,
  getParticipatedEvents,
  getEventById,
};

function getAllEvents() {
  return axios
    .get("/api/events")
    .then(handleResponse)
    /* eslint-disable */
    .catch(e => console.log(e));
}

function getSignedUpEvents() {
  return axios
    .get("/api/events/signed_up/u")
    .then(handleResponse)
    /* eslint-disable */
    .catch(e => console.log(e));
}

function getNotSignedUpEvents() {
  return axios
    .get("/api/events/not_signed_up/u")
    .then(handleResponse)
    /* eslint-disable */
    .catch(e => console.log(e));
}

function getParticipatedEvents() {
  return axios
    .get("/api/events//participated/u")
    .then(handleResponse)
    /* eslint-disable */
    .catch(e => console.log(e));
}

function getEventById(event_id) {
  return axios
    .get(`/api/events/${event_id}`)
    .then(handleResponse)
    /* eslint-disable */
    .catch(e => console.log(e));
}

function handleResponse(response) {
  console.log(response.data)
  return response.data;
}
