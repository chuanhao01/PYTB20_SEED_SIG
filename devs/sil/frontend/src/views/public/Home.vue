<template>
  <div class="home mx-auto">
    <h1>Hi, {{ users.items[0].fullname }}!</h1>
    <h1>List of Events</h1>
    <event-box></event-box>
  </div>
</template>

<script>
import EventBox from "@/components/EventBox.vue";
// import events from "@/events.json"
import { mapState, mapActions } from "vuex";

export default {
  components: {
    "event-box": EventBox
  },
  data() {
    return {
      // events
    };
  },
  computed: {
    ...mapState({
      account: state => state.account,
      users: state => state.users.all,
    })
  },
  created() {
    this.getAllUsers();
  },
  methods: {
    ...mapActions("users", {
      getAllUsers: "getAll",
      updateUser: "update"
    }),
    
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 80%;
}

@media only screen and (max-width: 600px) {
  .home{
    width: 100%;
  }
}
</style>
