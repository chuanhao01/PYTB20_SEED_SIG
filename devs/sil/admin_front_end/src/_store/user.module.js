// @ts-nocheck
import { userService } from "../_services";

const state = {
  user: {}
};

const actions = {
  getUser({ commit }) {
    commit("getUserRequest");

    userService.getUser().then(
      user => commit("getUserSuccess", user),
      error => commit("getUserFailure", error)
    );
  },

  updateUser({ commit }, user) {
    commit("updateUserRequest");

    userService.updateUser(user).then(
      user => commit("updateUserSuccess", user),
      error => commit("updateUserFailure", error)
    );
  }
};

const mutations = {
  getUserRequest(state) {
    state.user = { loading: true };
  },
  getUserSuccess(state, user) {
    state.user = { items: user };
  },
  getUserFailure(state, error) {
    state.user = { error };
  },
  
  updateUserRequest(state) {
    state.user = { loading: true };
  },
  updateUserSuccess(state, user) {
    user;
    state.user = {};
  },
  updateUserFailure(state, error) {
    error;
    state.user = {};
  }
};

export const users = {
  namespaced: true,
  state,
  actions,
  mutations
};
