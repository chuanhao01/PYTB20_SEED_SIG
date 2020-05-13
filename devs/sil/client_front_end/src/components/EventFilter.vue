<template>
  <div class="eventFilter">
    <!-- <button
      class="btn btn-secondary px-3 py-2 text-center mr-3 mb-3"
      id="filter-all-btn"
      :class="{ 'btn btn-primary text-white': status === 'all' }"
      @click="handleStatusFilter('all')"
    >
      All Events
    </button>
    <button
      class="btn btn-secondary px-3 py-2 text-center mr-3 mb-3"
      id="filter-all-btn"
      :class="{ 'btn btn-primary text-white': status === 'signed-up' }"
      @click="handleStatusFilter('signed-up')"
    >
      Signed Up
    </button>
    <button
      class="btn btn-secondary px-3 py-2 text-center mr-3 mb-3"
      id="filter-all-btn"
      :class="{ 'btn btn-primary text-white': status === '!signed-up' }"
      @click="handleStatusFilter('!signed-up')"
    >
      Not Signed Up
    </button>-->
    <v-btn-toggle v-model="status" tile group>
      <v-btn value="all" @click="getAllEvents()">All Events</v-btn>
      <v-btn value="signed-up" @click="getSignedUpEvents()">Signed Up</v-btn>
      <v-btn value="!signed-up" @click="getNotSignedUpEvents()">
        Not Signed Up
      </v-btn>
      <v-btn value="!signed-up" @click="getParticipatedEvents()">
        Participated
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "EventFilter",
  data() {
    return {
      status: 'all'
    };
  },
  // computed: {
  //   ...mapState({
  //     status: state => state.events.filter.status
  //   })
  // },
  created() {
    this.getAllEvents();
  },
  methods: {
    ...mapActions("events", {
      getAllEvents: "getAllEvents",
      getSignedUpEvents: "getSignedUpEvents",
      getNotSignedUpEvents: "getNotSignedUpEvents",
      getParticipatedEvents: "getParticipatedEvents",
    })
  }
};
</script>

<style></style>
