<template>
  <div class="home mx-auto">
    <h1>Hi, {{ account.user.fullname }}!</h1>
    <hr />
    <h1>List of Events</h1>
    
    <event-box></event-box>
  </div>
</template>

<script>
import EventBox from "@/components/EventBox.vue";
import { mapState } from "vuex";

export default {
  components: {
    "event-box": EventBox
  },
  data() {
    return {
      // events
    };
  },
  computed: {
    ...mapState({
      account: state => state.account,
      status: state => state.events.filter.status
    })
  },
  created() {
    // this.getAllUsers();
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 80%;
}

.filter-all-btn {
  &:hover {
  }
}

@media only screen and (max-width: 600px) {
  .home {
    width: 100%;
  }
}
</style>
