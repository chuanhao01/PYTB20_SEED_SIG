<template>
  <div class="eventFilter">
    <button
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
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "EventFilter",
  computed: {
    ...mapState({
      status: state => state.events.filter.status
    })
  },
  created() {},
  methods: {
    ...mapActions("events", {
      filterStatus: "filterStatus"
    }),
    handleStatusFilter(status) {
      this.filterStatus(status);
    }
  }
};
</script>

<style></style>
