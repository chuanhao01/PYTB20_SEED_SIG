<template>
  <div class="eventbox">
    <event-filter></event-filter>
    <div class="events row">
      <!-- <event-box class="col-lg-3 col-md-4 col-6 mb-3" v-for="event in allEvents.items" :key="event.eventid"></event-box> -->
      <router-link
        :to="'/event/' + event.event_id"
        tag="div"
        class="event col-lg-3 col-md-4 col-6 mb-3"
        v-for="event in allEvents.items"
        :key="event.eventid"
      >
        <div class="card">
          <div class="container">
            <h4>{{ event.title }}</h4>
            {{ event.description }}
            <hr />
            <span>
              <!-- icon by https://fontawesome.com/ -->
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="calendar-alt"
                class="svg-inline--fa fa-calendar-alt fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                />
              </svg>
              {{ moment(event.event_date).format("YYYY-MM-DD") }}
            </span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import EventFilter from "@/components/EventFilter.vue";
import moment from "moment";

export default {
  name: "EventBox",
  components: {
    "event-filter": EventFilter
  },
  created() {
    if (!this.allEvents.length) {
      this.getAllEvents();
    }
    console.log("list of events " + JSON.stringify(this.allEvents));
  },

  computed: {
    ...mapState({
      allEvents: state => state.events.allEvents
    })
    // ...mapGetters({
    //   allEvents: "events/getAllEvents",
    //   filteredEvents: "events/getFilteredEvents",
    //   event: "events/getEvent"
    // })
  },
  methods: {
    ...mapActions("events", {
      getAllEvents: "getAllEvents"
    }),
    moment: function() {
      return moment();
    }
  }
};
</script>

<style lang="scss">
.event {
  cursor: pointer;
}
.card {
  //   box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #eaecef;
  border-radius: 0.4rem;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  }
  .container {
    padding: 2rem 1rem;
    h4 {
      margin: 0;
    }
    hr {
      border: 1px solid #eaecef;
    }
    span {
      align-items: flex-end;
      svg {
        color: #3c424f;
        width: 1rem;
        padding-right: 0.3rem;
        padding-top: 0.1rem;
      }
    }
  }
}
</style>
