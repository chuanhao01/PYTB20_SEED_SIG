<template>
  <div class="row align-items-center">
    <div class="col-sm-4 mx-auto">
      <h1 class="text-center font-weight-bold">Log in</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email" class="text-uppercase text-muted">
            <small>Email</small>
          </label>
          <input
            type="email"
            v-model="email"
            name="email"
            class="form-control"
            :class="{ 'is-invalid': submitted && !email }"
          />
          <div v-if="submitted && email" class="text-muted text-center pt-3">
            <p>
              We just sent you a magic link to login to your account.
              <br />Please check your inbox.
            </p>
          </div>
          <div v-show="submitted && !email" class="invalid-feedback">Email is required</div>
        </div>
        <div class="form-group text-center">
          <button class="btn btn-primary w-100 mb-2" :disabled="status.loggingIn || submitted && email">Login</button>
          <img
            v-show="status.loggingIn"
            src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
            alt="loading spinner"
          />
          <span class="text-muted">
            You can also
            <router-link to="/register">Register</router-link>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      submitted: false
    };
  },
  computed: {
    ...mapState("account", ["status"])
  },
  created() {
    this.logout();
  },
  methods: {
    ...mapActions("account", ["login", "logout"]),
    handleSubmit() {
      this.submitted = true;
      const { email } = this;
      if (email) {
        this.login({ email });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.row {
  height: 70vh;
}

:disabled{
  cursor: default;
}
</style>
