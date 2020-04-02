<template>
  <div class="row align-items-center">
    <div class="col-xl-4 col-md-6 mx-auto">
      <h1 class="text-center font-weight-bold">Register</h1>
      <ValidationObserver rules="required" v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(submit);submitted=true">
          <div class="form-group">
            <label for="NRIC" class="text-uppercase text-muted">
              <small>NRIC</small>
            </label>
            <ValidationProvider name="NRIC" rules="required" v-slot="{errors}">
              <input
                type="text"
                v-model="user.nric"
                class="form-control"
                :class="{ 'is-invalid': submitted && errors[0]}"
                placeholder="Enter your NRIC..."
              />
              <div class="invalid-msg">{{ errors[0] }}</div>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label for="date of birth" class="text-uppercase text-muted">
              <small>Date of Birth</small>
            </label>
            <ValidationProvider name="date of birth" rules="required" v-slot="{ errors }">
              <input
                type="date"
                v-model="user.dob"
                class="form-control"
                :class="{ 'is-invalid': submitted && errors[0] }"
              />
              <div class="invalid-msg">{{ errors[0] }}</div>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label for="full name" class="text-uppercase text-muted">
              <small>Full Name</small>
            </label>
            <ValidationProvider name="full name" rules="required" v-slot="{ errors }">
              <input
                type="text"
                v-model="user.fullname"
                class="form-control"
                :class="{ 'is-invalid': submitted && errors[0] }"
                placeholder="Enter your full name..."
              />
              <div class="invalid-msg">{{ errors[0] }}</div>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label for="contact number" class="text-uppercase text-muted">
              <small>Contact Number</small>
            </label>
            <ValidationProvider name="contact number" rules="required" v-slot="{ errors }">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">+65</span>
                </div>
                <input
                  type="text"
                  v-model="user.contact_num"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && errors[0] }"
                  placeholder="Enter your contact number..."
                />
              </div>
              <div class="invalid-msg">{{ errors[0] }}</div>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label for="email" class="text-uppercase text-muted">
              <small>Email</small>
            </label>
            <ValidationProvider name="email" rules="required" v-slot="{ errors }">
              <input
                type="email"
                v-model="user.email"
                class="form-control"
                :class="{ 'is-invalid': submitted && errors[0] }"
                placeholder="Enter your email..."
              />
              <div class="invalid-msg">{{ errors[0] }}</div>
            </ValidationProvider>
          </div>

          <div class="form-group text-center">
            <button class="btn btn-primary w-100 mb-2" :disabled="status.registering">Register</button>
            <img
              v-show="status.registering"
              src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
              alt="loading spinner"
            />
            <span class="text-muted">
              You can also
              <router-link to="/login">Log in</router-link>
            </span>
          </div>
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
        email: ""
      },
      submitted: false
    };
  },
  computed: {
    ...mapState("account", ["status"])
  },
  methods: {
    ...mapActions("account", ["register"]),
    submit() {
      this.submitted = true;
      this.register(this.user);
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
