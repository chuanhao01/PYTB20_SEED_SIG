<template>
  <div class="home">
    <h1>List of Events</h1>
    <div class="events">
      <event-box class="eventBox" v-for="event in events" :key="event.eventid" :eventItem="event"></event-box>
    </div>
  </div>
</template>

<script>
import EventBox from "@/components/EventBox.vue";

export default {
  name: "Home",
  components: {
    "event-box": EventBox
  },
  data() {
    return {
      events: [
        {
          eventid: 1,
          eventName: "event 1",
          eventDesc: "Event 1 description",
          eventDate: "30 Feb 2021",
          eventStatus: 0
        },
        {
          eventid: 2,
          eventName: "event 2",
          eventDesc: "Event 2 description",
          eventDate: "30 Feb 2022",
          eventStatus: 0
        },
        {
          eventid: 3,
          eventName: "event 3",
          eventDesc: "Event 3 description",
          eventDate: "30 Feb 2023",
          eventStatus: 0
        },
        {
          eventid: 4,
          eventName: "event 4",
          eventDesc: "Event 4 description",
          eventDate: "30 Feb 2024",
          eventStatus: 0
        },
        {
          eventid: 5,
          eventName: "event 5",
          eventDesc: "Event 5 description",
          eventDate: "30 Feb 2025",
          eventStatus: 0
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
  // display: flex;
  // align-self: center;
  width: 90%;
  // margin: auto;
}

.events {
  display: flex;
  flex-wrap: wrap;
  .eventBox {
    // min-height: 380px;
    position: relative;
    float: left;
    width: 24%;
    padding: 0.5%;
  }
}
</style>
