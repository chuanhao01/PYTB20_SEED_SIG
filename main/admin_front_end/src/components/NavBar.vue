<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-white"> -->
    <!--<router-link to="/" id="logo" class="navbar-brand">
      <div class="org-name">
        <span>
          <strong>SINGAPORE</strong> YOUTH
          <strong>FOR</strong> CHRIST
        </span>
    </div>-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button type="button" id="sidebarCollapse" class="btn btn-info">
          <i class="fas fa-align-left"></i>
          <span>Toggle Sidebar</span>
        </button>
      </div>
    </nav>

    <!-- <div class="collapse navbar-collapse" id="navbarToggle"> -->
    <!-- navbar if not logged in -->
    <!--  <ul
        v-if="isLoggedIn === undefined || isLoggedIn === false"
        class="navbar-nav ml-auto mr-5 mt-2 mt-lg-0"
      >
        <li class="nav-item mr-2 font-weight-bold">
          <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
        </li>
        <li class="nav-item mr-2 font-weight-bold">
          <router-link to="/register" class="nav-link" active-class="active">Register</router-link>
        </li>
    </ul>-->
    <!-- navbar if logged in -->
    <!-- <ul v-else class="navbar-nav ml-auto mr-5 mt-2 mt-lg-0"> -->
    <!-- <li class="nav-item mr-2 font-weight-bold">
          <router-link :to="'/user/' + account.user.id + '/activity'" class="nav-link" active-class="active">Activity</router-link>
    </li>-->
    <!-- <li class="nav-item mr-2 font-weight-bold">
          <router-link
            :to="'/user/'+ account.user.id"
            class="nav-link"
            active-class="active"
          >Profile</router-link>
        </li>
        <li class="nav-item mr-2 font-weight-bold">
          <a class="nav-link" @click="logout">Logout</a>
        </li>
      </ul>
    </div>-->
  <!-- </nav> -->
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "NavBar",
  created() {},
  computed: {
    ...mapState({
      account: state => state.account
    }),
    ...mapGetters("account", ["isLoggedIn"])
  },
  methods: {
    ...mapActions("account", {
      logout: "logout"
    })
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Muli|Open+Sans|Playfair+Display:700i&display=swap");
// fonts:
// font-family: 'Open Sans', sans-serif;
// font-family: 'Muli', sans-serif;
// font-family: 'Playfair Display', serif;

:root {
  // TEXT
  font-size: 16px !important;
  font-family: "Open Sans", sans-serif;
  --text-primary: #000;
  --text-secondary: #3c424f;
  --text-secondary-variant: #8e9dae;
  // LINK
  --dropdown-link: #6b7c93;
  --link: #03a9f4;
  --link-hover: #2ebcfc;
  // Background
  --bg-primary: #fff;
  --bg-secondary: #f5fafd;
}

a {
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  .navbar-brand {
    font-size: 20px !important;
    width: 70%;
    display: flex;
    align-items: center;
    .org-name {
      text-decoration: none;
    }
  }
}

@media only screen and (min-width: 600px) {
  .navbar-brand {
    max-width: 30%;
    font-size: 25px;
  }
  .nav-link {
    color: var(--text-primary);
    font-size: 18px;
    white-space: nowrap;
    padding-bottom: 3px;

    &:hover {
      border-bottom: 3px solid var(--link);
      padding-bottom: 0px;
      // transition: border-bottom 200ms ease;
    }
  }
  .active {
    border-bottom: 3px solid var(--link);
    padding-bottom: 0px;
  }
}
</style>
