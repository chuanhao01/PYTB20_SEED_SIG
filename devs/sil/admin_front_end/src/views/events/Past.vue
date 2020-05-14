<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <h1>Past Events</h1>

      <event-box></event-box>
    </div>
  </div>
</template>

<script>
import EventBox from "../../components/EventBox";

export default {
  name: "PastEvents",
  components: {
    "event-box": EventBox
  },
  data: function(){
    return{
    }
  },
  methods: {
    
  }
};
</script>

<style>
</style>