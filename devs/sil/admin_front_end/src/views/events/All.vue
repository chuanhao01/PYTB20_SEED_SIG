<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <h1>Events</h1>

      <event-box></event-box>
    </div>
  </div>
</template>

<script>
import EventBox from "../../components/EventBox";

export default {
  name: "AllEvents",
  components: {
    "event-box": EventBox
  },
  data: function(){
    return{
      events: {
        event: {
          event_id: "",
          title: "",
          description: "",
          event_date: "",
          status: 0
          }
      }
    }
  },
  methods: {
    
  }
};
</script>

<style>
</style>