// @ts-nocheck
import axios from "axios";

export const eventService = {
    getAllEvents,
    getEventById,
    createEvent,
    updateEvent,
    closeEvent
};

function getAllEvents() {
    return axios
        .get("/api/events")
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

function createEvent(event) {
    return axios
        .post(`/api/events/`, event)
        .then(result => {
            /* eslint-disable */
            console.log(result);
            /* eslint-disable */
            console.log("event created");
            return result;
        })
        .catch(error => {
            /* eslint-disable */
            console.error(error);
        });
}

function updateEvent(event) {
    return axios
        .put(`/api/events/${event.event_id}`, event)
        .then(result => {
            console.log("event updated");
            return result;
        })
        .catch(error => {
            // eslint-disable-next-line no-console
            console.error(error);
        });
}

function closeEvent(event_id) {
    return axios
        .post(`/api/events/${event_id}`)
        .then(result => {
            /* eslint-disable */
            console.log(result);
            /* eslint-disable */
            console.log("event closed");
            return result;
        })
        .catch(error => {
            /* eslint-disable */
            console.error(error);
        });
}

function handleResponse(response) {
    // console.log(response.data)
    return response.data;
}
