import Vue from "vue";
import axios from "axios";

import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { store } from "./_store";
import { router } from "./_helpers";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.vue";

// Add the required rule
extend("required", {
  ...rules['required'],
  message: "The {_field_} field is required"
});

// Register it globally
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

import { configureFakeBackend } from "./_helpers";
configureFakeBackend();

Vue.config.productionTip = false;

axios.defaults.baseUrl = "http://localhost:8080";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
