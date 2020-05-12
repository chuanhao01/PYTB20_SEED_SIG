<template>
  <div class="row align-items-center">
    <div class="col-sm-4 mx-auto">
      <h1 class="text-center font-weight-bold">Log in</h1>
      <ValidationObserver ref="observer">
        <form>
          <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
            <v-text-field v-model="email" :error-messages="errors" label="E-mail" required></v-text-field>
          </ValidationProvider>
          <v-btn class="mr-4 mt-4 w-100" depressed large color="primary" @click="handleSubmit">Login</v-btn>
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
      this.$refs.observer.validate();
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

:disabled {
  cursor: default;
}
</style>
