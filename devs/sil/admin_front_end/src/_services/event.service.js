// @ts-nocheck
import axios from "axios";
import { router } from '../router/index';

export const eventService = {
    getAllEvents,
    countEvents,
    getEventById,
    createEvent,
    updateEvent,
    closeEvent
};

function getAllEvents(path) {
    return axios
        .get("/api/events")
        .then(result => filterEvents(handleResponse(result), path))
        /* eslint-disable */
        .catch(e => console.log(e));
}

function countEvents() {
    return axios
        .get("/api/events")
        .then(result => count(handleResponse(result)))
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

function filterEvents(data, path) {
    switch (path) {
        case "all":
            return data
        case "current":
            data = data.filter(event =>
                event.status == 0
            );
            return data;
        case "past":
            data = data.filter(event =>
                event.status == 1
            );
            return data;
        default:
            return data;
    }
}

function count(data) {
    console.log(data.filter(event =>
        event.status == 0
    ).length)

    let currentCount = data.filter(event =>
        event.status == 0
    ).length

    let pastCount = data.filter(event =>
        event.status == 1
    ).length

    let totalEvent = data.length

    return { currentCount, pastCount, totalEvent }
}