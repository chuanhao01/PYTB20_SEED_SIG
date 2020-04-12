<template>
  <div class="home mx-auto">

  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
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
