// @ts-nocheck
import { eventService, signupService } from "../_services";

const state = {
  allEvents: {},
  filteredEvents: {},
  event: {},
  filter: {
    status: 'all'
  }
};

const actions = {
  getAllEvents({ commit }) {
    commit("getAllEventsRequest");

    eventService.getAllEvents()
      .then(
        events => commit("getAllEventsSuccess", events),
        error => commit("getAllEventsFailure", error)
      );
  },
  getEventById({ commit }, event_id) {
    commit("getEventByIdRequest");

    eventService.getEventById(event_id)
      .then(
        event => commit("getEventByIdSuccess", event),
        error => commit("getEventByIdFailure", error)
      );
  },
  createSignUp({ commit }, event_id) {
    commit("signupRequest", event_id);

    signupService.createSignUp(event_id).then(
      event_id => {
        commit("signupSuccess", event_id);
      },
      error => {
        commit("signupFailure", error);
      }
    );
  },
  filterStatus({ commit, dispatch }, status) {
    commit('setFilterStatus', status)
    dispatch('filterEvents')
  }
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
    state.event = { items: event };
  },
  getEventByIdFailure(state, error) {
    state.event = { error };
  },
  signupRequest(state, event_id) {
    event_id;
    state.status = { signingup: true };
  },
  signupSuccess(state, event_id) {
    event_id;
    state.status = {};
  },
  signupFailure(state, error) {
    error;
    state.status = {};
  },
  setFilteredEvents(state, events) { state.filteredEvents = events },
  setFilterStatus(state, status) { state.filter.status = status },
  filterEvents (state) {
    const events = [...state.events]
    state.filteredEvents = events
    state.filteredEvents = eventService.filterEvents(state.filter, events)
  },
};

// const getters = {
//   signedUpEvents: state => {
//     return state.allEvents.filter(event => event.signed_up)
//   }
// }

const getters = {
  getAllEvents (state) { return state.allEvents },
  getFilteredEvents (state) { return state.filteredEvents },
  getEvent (state) { return state.event }
}

export const events = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
