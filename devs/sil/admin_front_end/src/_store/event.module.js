// @ts-nocheck
import { eventService } from "../_services";
import { router } from "../router";

const state = {
  allEvents: {},
  event: {}
};

const actions = {
  getAllEvents({ commit }) {
    commit("getAllEventsRequest");

    eventService.getAllEvents().then(
      events => commit("getAllEventsSuccess", events),
      error => commit("getAllEventsFailure", error)
    );
  },

  getEventById({ commit }, event_id) {
    commit("getEventByIdRequest");

    eventService.getEventById(event_id).then(
      event => {
        // router.push(`/events/${event_id}`)
        // console.log(event_id)
        // console.log(event)
        commit("getEventByIdSuccess", event)
      },
      error => commit("getEventByIdFailure", error)
    );
  },

  createEvent({ commit }, event) {
    commit("createEventRequest", event);

    eventService.createEvent(event).then(
      event => {
        commit("createEventSuccess", event);
        router.push('/events/current')
      },
      error => {
        commit("createEventFailure", error);
      }
    );
  },

  updateEvent({ commit }, event) {
    commit("updateEventRequest");

    eventService.updateEvent(event).then(
      result => {
        commit("updateEventSuccess", result)
        // router.push(`/event/${event.event_id}`)
      },
      error => commit("updateEventFailure", error)
    );
  },

  closeEvent({ commit }, event_id) {
    commit("closeEventRequest", event_id);

    eventService.closeEvent(event_id).then(
      event_id => {
        console.log("meow");

        commit("closeEventSuccess", event_id);
      },
      error => {
        commit("closeEventFailure", error);
      }
    );
  },
};

const mutations = {
  getAllEventsRequest(state) {
    state.allEvents = { loading: true };
  },
  getAllEventsSuccess(state, events) {
    state.allEvents = { items: events };
  },
  getAllEventsFailure(state, error) {
    state.allEvents = { error };
  },

  getEventByIdRequest(state) {
    state.event = { loading: true };
  },
  getEventByIdSuccess(state, event) {
    state.event = event;
  },
  getEventByIdFailure(state, error) {
    state.event = { error };
  },

  createEventRequest(state, event) {
    event;
    state.event = { creating: true };
  },
  createEventSuccess(state, event) {
    event;
    state.event = {};
  },
  createEventFailure(state, error) {
    error;
    state.status = {};
  },


  updateEventRequest(state) {
    state.event = { updating: true };
  },
  updateEventSuccess(state, event) {
    event;
    state.event = {};
  },
  updateEventFailure(state, error) {
    error;
    state.event = {};
  },

  closeEventRequest(state, event_id) {
    event_id;
    state.event = { closingEvent: true };
  },
  closeEventSuccess(state, event_id) {
    event_id;
    state.event = {};
  },
  closeEventFailure(state, error) {
    error;
    state.event = {};
  },

};

// const getters = {
//   signedUpEvents: state => {
//     return state.allEvents.filter(event => event.signed_up)
//   }
// }

// const getters = {
//   getAllEvents(state) {
//     return state.allEvents;
//   },
//   getFilteredEvents(state) {
//     return state.filteredEvents;
//   },
//   getEvent(state) {
//     return state.event;
//   }
// };

export const events = {
  namespaced: true,
  state,
  actions,
  mutations,
  // getters
};
