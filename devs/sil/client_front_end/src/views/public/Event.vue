<template>
  <div class="event mx-auto mt-5">
    <div class="row mt-5 pt-5">
      <!-- title + description + pics -->
      <div class="col-md-8 col-12 border mr-2 mt-5 p-3 order-2 order-md-1">
        <h1>{{ event.items.title }}</h1>
        <p>{{ event.items.description }}</p>
      </div>
      <!-- title + time + signup button -->
      <div class="col-md-3 col-12 border mt-5 p-3 order-1 order-md-2">
        <h1>{{ event.title }}</h1>
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
          {{ event.items.event_date }}
        </span>

        <button
          class="btn btn-primary w-100 mt-3 d-md-block d-none"
          @click="volunteer(event.items.event_id)"
          :class="{ 'd-none': event.items.signed_up }"
        >
          Volunteer!
        </button>
        <button
          class="btn btn-primary w-100 mt-3 d-md-block d-none"
          @click="volunteer(event.items.event_id)"
          :class="{ 'd-none': !event.items.signed_up }"
        >
          Unvolunteer!
        </button>
      </div>
    </div>
    <div class="container-fluid w-100 border-top" id="volunteer-mobile">
      <div class="col-12 d-md-none d-flex w-100 h-100">
        <button
          class="btn btn-primary w-100 mt-3 d-md-none d-block mb-3"
          @click="unvolunteer(event.items.event_id)"
          :class="{ 'btn-secondary': event.items.signed_up }"
        >
          Volunteer!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Event",
  created() {
    this.getEventById(this.$router.currentRoute.params.eventid);
  },

  computed: {
    ...mapState({
      event: state => state.events.event
    })
  },

  methods: {
    ...mapActions("events", {
      getEventById: "getEventById"
    }),
    ...mapActions("events", {
      volunteer: "createSignUp",
      unvolunteer: "deleteSignup"
    })
  }
};
</script>

<style lang="scss" scoped>
.event {
  width: 80%;
  height: 100%;
}

svg {
  color: #3c424f;
  width: 1.6rem;
  padding-right: 0.3rem;
  padding-top: 0.1rem;
}

@media only screen and (max-width: 600px) {
  #volunteer-mobile {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw !important;
    padding: 0;
    margin: 0;
  }
}
</style>
