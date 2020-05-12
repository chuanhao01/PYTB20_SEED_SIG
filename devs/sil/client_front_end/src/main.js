import Vue from "vue";
import axios from "axios";

import { store } from "./_store";
import { router } from "./_helpers";

// style
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import vuetify from "./plugins/vuetify";

// form validation
// import * as rules from "vee-validate/dist/rules";
import { required, email, max, min, length, alpha_num, digits } from "vee-validate/dist/rules";
import { ValidationObserver, ValidationProvider, extend, setInteractionMode } from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty"
});

extend("max", {
  ...max,
  // message: "{_field_} may not be greater than {length} characters"
  message: "{_field_} entered is not valid"
});

extend("min", {
  ...min,
  message: "{_field_} entered is not valid"
});

extend("length", {
  ...length,
  message: "{_field_} entered is not valid"
});

extend("email", {
  ...email,
  message: "Email must be valid"
});

extend("alpha_num", {
  ...alpha_num,
  message: "{_field_} must be valid"
});

extend("digits", {
  ...digits,
  message: "{_field_} must be valid"
});

import App from "./App.vue";


// Add the required rule
// extend("required", {
//   ...rules["required"],
//   message: "The {_field_} field is required"
// });

// Register it globally
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

Vue.config.productionTip = false;

axios.defaults.baseURL = "http://34.87.12.64:8081";

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
