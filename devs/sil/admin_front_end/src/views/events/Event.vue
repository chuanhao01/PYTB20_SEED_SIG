<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <div class="page-header">
        <form>
          <input
            class="btn btn-inverse-info p-3"
            type="button"
            value="← Go Back"
            onclick="history.go(-1)"
          />
        </form>
      </div>
      <div class="page-header">
        <h3 class="page-title d-block">View Event</h3>
      </div>
      <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">{{ event.title }}</h4>
              <p class="card-description">
                <i class="mdi mdi-calendar"></i>
                {{ moment(event.event_date).format("YYYY-MM-DD") }}
              </p>
              <p>{{ event.description }}</p>
              <button
                class="btn btn-lg btn-gradient-info mt-4 mr-4"
                @click="getSignUpByEventId(event.event_id)"
              >Export Participants Data</button>
              <router-link
                class="btn btn-lg btn-gradient-info mt-4 mr-4"
                :to="'/event/' + event.event_id + '/edit'"
              >Edit Event</router-link>
              <button
                @click="showModal(event, 'close')"
                class="btn btn-lg btn-gradient-danger mt-4 mr-4"
              >Close Registration</button>
              <!-- <button @click="showModal(event, 'delete')" class="btn btn-lg btn-gradient-danger mt-4 mr-4">Delete Event</button> -->
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
  name: "Event",
  data: function() {
    return {};
  },
  created() {
    if (!this.event.length) {
      this.getEventById(this.$route.params.eventId);
    }
  },

  computed: {
    ...mapState({
      event: state => state.events.event
    })
  },

  methods: {
    ...mapActions("events", {
      closeEvent: "closeEvent",
      getEventById: "getEventById"
    }),
    ...mapActions("signups", {
      getSignUpByEventId: "getSignUpByEventId"
    }),
    moment: function() {
      return moment();
    },
    showModal(event, action) {
      this.$swal({
        title: `Are you sure you want to ${action} ${event.title}?`,
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
          if (action === "close") {
            this.closeEvent(this.event.event_id);
          } else if (action === "delete") {
            // delete event
          }
          this.$swal({
            title: "Event Closed",
            text: `You successfully ${action}d ${this.event.title}`,
            icon: "success"
          });
        }
      });
    },
    moment: function() {
      return moment();
    }
  }
};
</script>

<style>
</style>