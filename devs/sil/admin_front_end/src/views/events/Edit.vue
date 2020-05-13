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
        <h3 class="page-title">Edit Event</h3>
      </div>
      <div class="row">
        <div class="col-12 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <form class="editEventForm" @submit.prevent="onSubmit(event)">
                <div class="form-group">
                  <label for="eventTitle">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="event.title"
                    id="eventTitle"
                    placeholder="Title"
                  />
                </div>
                <div class="form-group">
                  <label for="eventDescription">Description</label>
                  <textarea
                    class="form-control"
                    v-model="event.description"
                    id="eventDescription"
                    rows="4"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="eventDate">Date</label>
                  <input
                    type="date"
                    class="form-control"
                    v-model="date"
                    id="eventDate"
                    placeholder="Date"
                  />
                </div>
                <div class="form-group">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Status</label>
                    <div class="col-sm-4">
                      <div class="form-check">
                        <label class="form-check-label">
                          <input
                            type="radio"
                            class="form-check-input"
                            name="membershipRadios"
                            id="membershipRadios1"
                            value="0"
                            v-model="event.status"
                          /> Accepting Registration
                          <i class="input-helper"></i>
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-5">
                      <div class="form-check">
                        <label class="form-check-label">
                          <input
                            type="radio"
                            class="form-check-input"
                            name="membershipRadios"
                            id="membershipRadios2"
                            value="1"
                            v-model="event.status"
                          /> Closed Registration
                          <i class="input-helper"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="submit" class="btn btn-gradient-info mr-2">Save Changes</button>
                <input class="btn btn-light" type="button" value="Cancel" onclick="history.go(-1)" />
              </form>
              <p class="pt-4" v-if="eventUpdated">Event Updated Successfully.</p>
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
import router from "../../router";

export default {
  name: "Event",
  data: function() {
    return {
      eventUpdated: null
    };
  },
  created() {
    if (!this.event.length) {
      this.getEventById(this.$route.params.eventId);
    }
  },

  computed: {
    ...mapState({
      event: state => state.events.event
    }),
    date: {
      get: function() {
        return (this.event.event_date = moment(event.event_date).format(
          "YYYY-MM-DD"
        ));
      },
      set: function(newValue) {
        this.event.event_date = newValue;
      }
    }
  },
  methods: {
    ...mapActions("events", {
      getEventById: "getEventById",
      updateEvent: "updateEvent"
    }),
    moment: function() {
      return moment();
    },
    convertDate(date) {
      moment(date).format("YYYY-MM-DD");
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
    onSubmit(event) {
      // event.event_date = this.date;
      this.updateEvent(event).then(result => {
        alert("Event Updated Successfully")
      }).then(router.push(`/event/${this.event.event_id}`))
    }
  }
};
</script>

<style>
</style>
