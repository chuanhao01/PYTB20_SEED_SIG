<template>
  <div class="row">
    <div
      class="col-md-3 grid-margin stretch-card"
      v-for="event in allEvents.items"
      :key="event.event_id"
    >
      <div class="card">
        <div class="card-body">
          <div class="clearfix">
            <h4 class="card-title" v-if="event.title.length < 14">{{ event.title }}</h4>
            <h4 class="card-title" v-else>{{ event.title.substring(0,14)+".." }}</h4>
            <p class="card-description" v-if="event.description.length < 30">{{ event.description }}</p>
            <p class="card-description" v-else>{{ event.description.substring(0,45)+".." }}</p>
            <span>
              <i class="mdi mdi-calendar"></i>
              {{ moment(event.event_date).format("YYYY-MM-DD") }}
            </span>
            <!-- buttons -->
            <div class="btn-group d-flex">
              <router-link
                class="btn btn-block btn-lg btn-gradient-info mt-4"
                :to="'/event/' + event.event_id"
              >View Event</router-link>
              <!-- @click="getEventById(event.event_id)" -->
              <a
                class="mdi mdi-dots-vertical mt-4 h2"
                id="profileDropdown"
                href="#"
                data-toggle="dropdown"
                aria-expanded="false"
              ></a>
              <div class="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                <router-link class="dropdown-item" :to="'/event/' + event.event_id + '/edit'">
                  <i class="mdi mdi-grease-pencil mr-2 text-success"></i> Edit Event
                </router-link>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" @click="showModal(event)">
                  <i class="mdi mdi-close-box mr-2 text-danger"></i> Close Registration
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import moment from "moment";

export default {
  name: "EventBox",
  data: function() {
    return {};
  },
  created() {
    this.getEvents(
      this.$route.path.substring(this.$route.path.lastIndexOf("/") + 1)
    );
  },

  computed: {
    ...mapState({
      allEvents: state => state.events.allEvents
    })
  },

  methods: {
    ...mapActions("events", {
      getAllEvents: "getAllEvents",
      closeEvent: "closeEvent",
      getEventById: "getEventById"
    }),
    moment: function() {
      return moment();
    },
    showModal(event) {
      this.$swal({
        title: `Are you sure you want to close ${event.title}?`,
        // text: "You won't be able to revert this!",
        icon: "warning",
        buttons: {
          cancel: {
            text: "Cancel",
            value: false,
            visible: true,
            className: "btn btn-danger",
            closeModal: true
          },
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true
          }
        }
      }).then(result => {
        if (result) {
          this.closeEvent(event.event_id);
          this.$swal({
            title: "Event Closed",
            text: `You successfully closed ${event.title}`,
            icon: "success"
          });
        }
      });
    },
    getEvents(path) {
      this.getAllEvents(path);
    }
  }
};
</script>

<style>
</style>