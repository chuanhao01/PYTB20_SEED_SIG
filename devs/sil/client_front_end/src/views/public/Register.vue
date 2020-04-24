<template>
  <div class="row align-items-center">
    <div class="col-xl-4 col-md-6 mx-auto">
      <h1 class="text-center font-weight-bold">Register</h1>
      <ValidationObserver ref="observer">
        <form>
          <!-- nric -->
          <ValidationProvider v-slot="{ errors }" name="NRIC" rules="required|alpha_num|length:9">
            <v-text-field v-model="user.nric" :error-messages="errors" label="NRIC" required></v-text-field>
          </ValidationProvider>

          <!-- dob -->
          <ValidationProvider v-slot="{ errors }" name="Date of Birth" rules="required">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="290px"
              :error-messages="errors"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  required
                  v-model="user.dob"
                  label="Date of Birth"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                ref="picker"
                v-model="user.dob"
                :max="new Date().toISOString().substr(0, 10)"
                min="1950-01-01"
                @change="save"
              ></v-date-picker>
            </v-menu>
          </ValidationProvider>

          <!-- fullname -->
          <ValidationProvider v-slot="{ errors }" name="Full Name" rules="required">
            <v-text-field
              v-model="user.fullname"
              :error-messages="errors"
              label="Full Name"
              required
            ></v-text-field>
          </ValidationProvider>

          <!-- contact_num -->
          <ValidationProvider v-slot="{ errors }" name="Contact Number" rules="required|digits:8">
            <v-text-field
              v-model="user.contact_num"
              :error-messages="errors"
              label="Contact Number"
              required
            ></v-text-field>
          </ValidationProvider>

          <!-- email -->
          <ValidationProvider v-slot="{ errors }" name="E-mail" rules="required|email">
            <v-text-field v-model="user.email" :error-messages="errors" label="E-mail" required></v-text-field>
          </ValidationProvider>

          <!-- pdpa -->
          <ValidationProvider v-slot="{ errors }" name="pdpa" rules="required">
            <v-checkbox v-model="checkbox" :error-messages="errors" :label="`PDPA: ${checkbox}`"></v-checkbox>
          </ValidationProvider>

          <v-btn class="mr-4" @click="submit">submit</v-btn>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        nric: "",
        dob: "",
        fullname: "",
        contact_num: "",
        email: "",
        pdpa: this.checkbox ? 1 : 0
      },
      submitted: false,
      menu: false,
      checkbox: false
    };
  },
  computed: {
    ...mapState("account", ["status"])
  },
  methods: {
    ...mapActions("account", ["register"]),
    submit() {
      this.$refs.observer.validate();
      this.submitted = true;
      this.register(this.user);
    },
    save(dob) {
      this.$refs.menu.save(dob);
    }
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  }
};
</script>

<style lang="scss" scoped>
.row {
  min-height: 80vh;
}
.invalid-msg {
  color: rgb(175, 33, 33);
  font-size: 12px;
}
</style>
