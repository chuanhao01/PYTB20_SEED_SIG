import Vue from "vue";
import Vuex from "vuex";

import { users } from "./user.module";
import { events } from "./event.module";
import { signups } from "./signup.module";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    users,
    events,
    signups
  }
});
