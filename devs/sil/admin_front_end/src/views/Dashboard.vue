<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <h1>Events</h1>
        <!-- card -->
        <event-box></event-box>
      </div>
    </div>
  </div>
</template>

<script>
import EventBox from "../components/EventBox";
import { mapState } from "vuex";

export default {
  name: "Dashboard",
  components: {
    "event-box": EventBox
  },
  data: function() {
    return {};
  }
};
</script>

<style>
</style>