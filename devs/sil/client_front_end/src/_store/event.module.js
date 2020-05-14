// @ts-nocheck
import { eventService, signupService } from "../_services";

const state = {
  allEvents: {},
  filteredEvents: {},
  event: {},
  filter: {
    status: "all"
  }
};

const actions = {
  getAllEvents({ commit }) {
    commit("getAllEventsRequest");

    eventService.getAllEvents().then(
      events => commit("getAllEventsSuccess", events),
      error => commit("getAllEventsFailure", error)
    );
  },

  getSignedUpEvents({ commit }) {
    commit("getSignedUpEventsRequest");

    eventService.getSignedUpEvents().then(
      events => commit("getSignedUpEventsSuccess", events),
      error => commit("getSignedUpEventsFailure", error)
    );
  },
  
  getNotSignedUpEvents({ commit }) {
    commit("getNotSignedUpEventsRequest");

    eventService.getNotSignedUpEvents().then(
      events => commit("getNotSignedUpEventsSuccess", events),
      error => commit("getNotSignedUpEventsFailure", error)
    );
  },
  
  getParticipatedEvents({ commit }) {
    commit("getParticipatedEventsRequest");

    eventService.getParticipatedEvents().then(
      events => commit("getParticipatedEventsSuccess", events),
      error => commit("getParticipatedEventsFailure", error)
    );
  },

  getEventById({ commit }, event_id) {
    commit("getEventByIdRequest");

    eventService.getEventById(event_id).then(
      event => commit("getEventByIdSuccess", event),
      error => commit("getEventByIdFailure", error)
    );
  },

  createSignUp({ commit }, event_id) {
    commit("createSignupRequest", event_id);

    signupService.createSignUp(event_id).then(
      event_id => {
        commit("createSignupSuccess", event_id);
      },
      error => {
        commit("createSignupFailure", error);
      }
    );
  },

  deleteSignUp({ commit }, event_id) {
    commit("deleteSignupRequest", event_id);

    signupService.deleteSignUp(event_id).then(
      event_id => {
        commit("deleteSignupSuccess", event_id);
      },
      error => {
        commit("deleteSignupFailure", error);
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

  getSignedUpEventsRequest(state) {
    state.allEvents = { loading: true };
  },
  getSignedUpEventsSuccess(state, events) {
    state.allEvents = { items: events };
  },
  getSignedUpEventsFailure(state, error) {
    state.allEvents = { error };
  },

  getNotSignedUpEventsRequest(state) {
    state.allEvents = { loading: true };
  },
  getNotSignedUpEventsSuccess(state, events) {
    state.allEvents = { items: events };
  },
  getNotSignedUpEventsFailure(state, error) {
    state.allEvents = { error };
  },

  getParticipatedEventsRequest(state) {
    state.allEvents = { loading: true };
  },
  getParticipatedEventsSuccess(state, events) {
    state.allEvents = { items: events };
  },
  getParticipatedEventsFailure(state, error) {
    state.allEvents = { error };
  },

  
  getEventByIdRequest(state) {
    state.event = { loading: true };
  },
  getEventByIdSuccess(state, event) {
    state.event = { items: event };
  },
  getEventByIdFailure(state, error) {
    state.event = { error };
  },

  createSignupRequest(state, event_id) {
    event_id;
    state.status = { signingup: true };
  },
  createSignupSuccess(state, event_id) {
    event_id;
    state.status = {};
  },
  createSignupFailure(state, error) {
    error;
    state.status = {};
  },

  deleteSignupRequest(state, event_id) {
    event_id;
    state.status = { deletingSignup: true };
  },
  deleteSignupSuccess(state, event_id) {
    event_id;
    state.status = {};
  },
  deleteSignupFailure(state, error) {
    error;
    state.status = {};
  },


};

// const getters = {
//   signedUpEvents: state => {
//     return state.allEvents.filter(event => event.signed_up)
//   }
// }

const getters = {
  getAllEvents(state) {
    return state.allEvents;
  },
  getFilteredEvents(state) {
    return state.filteredEvents;
  },
  getEvent(state) {
    return state.event;
  }
};

export const events = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
