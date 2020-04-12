<template>
  <div class="profile">
    <h1>Name: {{ account.user.fullname }}</h1>
    <p>Email: {{ account.user.email }}</p>
    <hr />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Profile",
  created() {
    this.getUserById(this.$router.currentRoute.params.userid);
  },

  computed: {
    ...mapState({
      account: state => state.account
    })
  }
};
</script>

<style></style>
