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
                  <input type="text" class="form-control" id="eventTitle" v-model="data.title" placeholder="Title" required />
                </div>
                <div class="form-group">
                  <label for="eventDescription">Description</label>
                  <textarea class="form-control" id="eventDescription" v-model="data.description" rows="4" required></textarea>
                </div>
                <div class="form-group">
                  <label for="eventDate">Date</label>
                  <input type="date" class="form-control" id="eventDate" v-model="data.event_date" placeholder="Date" required />
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
import { mapActions } from 'vuex'
import router from '../../router'

export default {
  data: function(){
    return{
      data: {
        title:"",
        description:"",
        event_date:"",
      }
    }
  },

  methods: {
    ...mapActions("events", {
      getAllEvents: "getAllEvents",
      createEvent: "createEvent"
    }),
    onSubmit (data) {
      this.createEvent(data);
      router.push('/events/all');
    }
  }
};
</script>

<style>
</style>