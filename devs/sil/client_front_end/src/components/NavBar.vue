<template>
  <v-app-bar fixed color="white" elevate-on-scroll scroll-target="#contents">
    <!-- <v-app-bar clipped-left elevate-on-scroll app> -->
    <!--Hamburger menu 
    <v-app-bar-nav-icon />-->
    <v-toolbar-title class="toolbar-title">
      <router-link to="/" class="navbar-brand">
        <span>
          <strong>SINGAPORE</strong> YOUTH
          <strong>FOR</strong> CHRIST
        </span>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text>
        <router-link to="/login">Login</router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/register">Register</router-link>
      </v-btn>
    </v-toolbar-items>
    <v-menu class="hidden-md-and-up">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.toolbar-title {
  .navbar-brand {
    span {
      color: #333 !important;
    }
  }
}
</style>
