import { userService } from "../_services";
import { router } from "../_helpers";

const user = JSON.parse(localStorage.getItem("user"));

const state = user
  ? { status: { loggedin: true }, user }
  : { status: {}, user: null };

const actions = {
  login({ dispatch, commit }, { email }) {
    commit("loginRequest", { email });

    userService.login(email).then(
      user => {
        commit("loginSuccess", user);
      },
      error => {
        commit("loginFailure", error);
        dispatch("alert/error", error, { root: true });
      }
    );
  },

  logout({ commit }) {
    userService.logout();
    commit("logout");
  },

  register({ dispatch, commit }, user) {
    commit("registerRequest", user);

    userService.register(user).then(
      user => {
        commit("registerSuccess", user);
        router.push("/login");
        setTimeout(() => {
          dispatch("alert/success", "Registration successful", { root: true });
        });
      },
      error => {
        commit("registerFailure", error);
        dispatch("alert/error", error, { root: true });
      }
    );
  }
};

const mutations = {
  loginRequest(state, user) {
    state.status = { loggingIn: true };
    state.user = user;
  },
  loginSuccess(state, user) {
    state.status = { loggedin: true };
    state.user = user;
  },
  loginFailure(state) {
    state.status = {};
    state.user = null;
  },
  logout(state) {
    state.status = {};
    state.user = null;
  },
  registerRequest(state, user) {
    user;
    state.status = { registering: true };
  },
  registerSuccess(state, user) {
    user;
    state.status = {};
  },
  registerFailure(state, error) {
    error;
    state.status = {};
  }
};

const getters = {
  isLoggedIn () {
    return state.status.loggedin
  }
}

export const account = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
