// @ts-nocheck
import { eventService } from "../_services";

const state = {
  allEvents: {},
  event: {}
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

//   delete({ commit }, id) {
//     commit("deleteRequest", id);

//     eventService.delete(id).then(
//       user => commit("deleteSuccess", { id, user: user }),
//       error => commit("deleteFailure", { id, error: error.toString() })
//     );
//   }
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

//   deleteRequest(state, id) {
//     // add 'deleting:true' property to user being deleted
//     state.all.items = state.all.items.map(user =>
//       user.id === id ? { ...user, deleting: true } : user
//     );
//   },
//   deleteSuccess(state, id) {
//     // remove deleted user from state
//     state.all.items = state.all.items.filter(user => user.id !== id);
//   },
//   deleteFailure(state, { id, error }) {
//     // remove 'deleting:true' property and add 'deleteError:[error]' property to user
//     state.all.items = state.all.items.map(user => {
//       if (user.id === id) {
//         // make copy of user without 'deleting:true' property
//         const { deleting, ...userCopy } = user;
//         deleting;
//         // return copy of user with 'deleteError:[error]' property
//         return { ...userCopy, deleteError: error };
//       }

//       return user;
//     });
//   }
};

export const events = {
  namespaced: true,
  state,
  actions,
  mutations
};
