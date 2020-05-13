// @ts-nocheck
import { signUpService } from "../_services";

const state = {
  signUps: {},
  signUp: {},
};

const actions = {
  getSignUpById({ commit }, signup_id) {
    commit("getSignUpByIdRequest");

    signUpService.getSignUpById(signup_id).then(
      signUp => commit("getSignUpByIdSuccess", signUp),
      error => commit("getSignUpByIdFailure", error)
    );
  },

  updateSignUp({ commit }) {
    commit("updateSignUpRequest");

    signUpService.updateSignUp().then(
      signUp => commit("updateSignUpSuccess", signUp),
      error => commit("updateSignUpFailure", error)
    );
  },

  getSignUpByEventId({ commit }, event_id) {
    commit("getSignUpByEventIdRequest");

    signUpService.getSignUpByEventId(event_id).then(
      signUp => commit("getSignUpByEventIdSuccess", signUp),
      error => commit("getSignUpByEventIdFailure", error)
    );
  },


};

const mutations = {
  getSignUpByIdRequest(state) {
    state.signUp = { loading: true };
  },
  getSignUpByIdSuccess(state, signUp) {
    state.signUp = { items: signUp };
  },
  getSignUpByIdFailure(state, error) {
    state.signUp = { error };
  },
  
  updateSignUpRequest(state) {
    state.signUp = { loading: true };
  },
  updateSignUpSuccess(state, signUp) {
    signUp;
    state.signUp = {};
  },
  updateSignUpFailure(state, error) {
    error;
    state.signUp = {};
  },
  
  getSignUpByEventIdRequest(state) {
    state.signUp = { loading: true };
  },
  getSignUpByIdSuccess(state, signUp) {
    state.signUp = { items: signUp };
  },
  getSignUpByIdFailure(state, error) {
    state.signUp = { error };
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

export const signups = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
