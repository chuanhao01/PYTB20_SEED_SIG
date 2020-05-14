<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <div class="page-header">
        <h3 class="page-title">Create Event</h3>
      </div>
      <div class="row">
        <div class="col-12 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <form class="createEventForm" v-on:submit.prevent="onSubmit(data)">
                <div class="form-group">
                  <label for="eventTitle">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    id="eventTitle"
                    v-model="data.title"
                    placeholder="Title"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="eventDescription">Description</label>
                  <textarea
                    class="form-control"
                    id="eventDescription"
                    v-model="data.description"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="eventDate">Date</label>
                  <input
                    type="date"
                    class="form-control"
                    id="eventDate"
                    v-model="data.event_date"
                    placeholder="Date"
                    required
                  />
                </div>
                <button type="submit" class="btn btn-gradient-info mr-2">Submit</button>
                <button class="btn btn-light">Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import router from "../../router";

export default {
  data: function() {
    return {
      data: {
        title: "",
        description: "",
        event_date: ""
      }
    };
  },

  methods: {
    ...mapActions("events", {
      getAllEvents: "getAllEvents",
      createEvent: "createEvent"
    }),
    onSubmit(data) {
      this.showModal(data);
    },
    showModal(event) {
      this.$swal({
        title: `Are you sure you want to create ${event.title}?`,
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
          this.createEvent(event);
          this.$swal({
            title: "Event Closed",
            text: `You successfully created ${event.title}\nClick 'OK' to be redirected to Current Events Page`,
            icon: "success",
            value: "ok"
          }).then(result2 => {
            if (result2) {
              router.push("/events/current");
            }
          });
        }
      });
    }
  }
};
</script>

<style>
</style>