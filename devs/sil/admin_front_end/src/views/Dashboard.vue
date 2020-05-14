<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <h1>Data</h1>
      <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
          <div class="card card-statistics">
            <div class="card-body">
              <div class="clearfix">
                <div class="float-left">
                  <i class="mdi mdi-cube text-danger icon-lg"></i>
                </div>
                <div class="float-right">
                  <p class="mb-0 text-right">Total Events</p>
                  <div class="fluid-container">
                    <h3 class="font-weight-medium text-right mb-0">{{eventCount.items.totalEvent}}</h3>
                  </div>
                </div>
              </div>
              <p class="text-muted mt-3 mb-0">
                <i class="mdi mdi-information-outline mr-1" aria-hidden="true"></i> Total Number
              </p>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
          <div class="card card-statistics">
            <div class="card-body">
              <div class="clearfix">
                <div class="float-left">
                  <i class="mdi mdi-calendar-clock text-warning icon-lg"></i>
                </div>
                <div class="float-right">
                  <p class="mb-0 text-right">Ongoing Events</p>
                  <div class="fluid-container">
                    <h3 class="font-weight-medium text-right mb-0">{{eventCount.items.currentCount}}</h3>
                  </div>
                </div>
              </div>
              <p class="text-muted mt-3 mb-0">
                <i class="mdi mdi-information-outline mr-1" aria-hidden="true"></i> Events Open for Registration
              </p>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
          <div class="card card-statistics">
            <div class="card-body">
              <div class="clearfix">
                <div class="float-left">
                  <i class="mdi mdi-calendar-multiple-check text-success icon-lg"></i>
                </div>
                <div class="float-right">
                  <p class="mb-0 text-right">Past Events</p>
                  <div class="fluid-container">
                    <h3 class="font-weight-medium text-right mb-0">{{eventCount.items.pastCount}}</h3>
                  </div>
                </div>
              </div>
              <p class="text-muted mt-3 mb-0">
                <i class="mdi mdi-information-outline mr-1" aria-hidden="true"></i> Closed Registration
              </p>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
          <div class="card card-statistics">
            <div class="card-body">
              <div class="clearfix">
                <div class="float-left">
                  <i class="mdi mdi-account-box-multiple text-info icon-lg"></i>
                </div>
                <div class="float-right">
                  <p class="mb-0 text-right">Volunteers</p>
                  <div class="fluid-container">
                    <h3 class="font-weight-medium text-right mb-0">2</h3>
                  </div>
                </div>
              </div>
              <p class="text-muted mt-3 mb-0">
                <i class="mdi mdi-information-outline mr-1" aria-hidden="true"></i> Total Number
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 class="mt-4">Events</h2>
      <!-- card -->
      <event-box></event-box>
    </div>
  </div>
</template>

<script>
import EventBox from "../components/EventBox";
import { mapState, mapActions } from "vuex";

export default {
  name: "Dashboard",
  components: {
    "event-box": EventBox
  },
  data: function() {
    return {};
  },
  created() {
    this.countEvents();
  },
  computed: {
    ...mapState({
      eventCount: state => state.events.eventCount
    })
  },
  methods: {
    ...mapActions("events", {
      countEvents: "countEvents"
    })
  }
};
</script>

<style>
</style>