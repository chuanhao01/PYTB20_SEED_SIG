<template>
  <!-- <div>
    <h1>Hi {{ account.user.firstName }}!</h1>
    <p>You're logged in with Vue + Vuex & JWT!!</p>
    <h3>Users from secure api end point:</h3>
    <em v-if="users.loading">Loading users...</em>
    <span v-if="users.error" class="text-danger">ERROR: {{ users.error }}</span>
    <ul v-if="users.items">
      <li v-for="user in users.items" :key="user.id">
        {{ user.firstName + " " + user.lastName }}
        <span v-if="user.deleting">
          <em>- Deleting...</em>
        </span>
        <span v-else-if="user.deleteError" class="text-danger"
          >- ERROR: {{ user.deleteError }}</span
        >
        <span v-else>
          -
          <a @click="deleteUser(user.id)" class="text-danger">Delete</a>
        </span>
      </li>
    </ul>
    <p>
      <router-link to="/login">Logout</router-link>
    </p>
  </div>-->
  <div class="home mx-auto">
    <h1>List of Events</h1>
    <div class="events row">
      <event-box class="eventBox col-lg-3 col-md-4 col-6 mb-3" v-for="event in events" :key="event.eventid" :eventItem="event"></event-box>
    </div>
  </div>
</template>

<script>
import EventBox from "@/components/EventBox.vue";
import events from "@/events.json"
import { mapState, mapActions } from "vuex";

export default {
  components: {
    "event-box": EventBox
  },
  data() {
    return {
      events
    };
  },
  computed: {
    ...mapState({
      account: state => state.account,
      users: state => state.users.all
    })
  },
  created() {
    // this.getAllEvents();
  },
  methods: {
    ...mapActions("users", {
      updateUser: "update"
    }),
    // ...mapActions("events", {
    //   getAllEvents: "getAllEvents",
    //   deleteUser: "delete"
    // })
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
