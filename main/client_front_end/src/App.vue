<template>
  <div id="app" v-cloak>
    <NavBar id="nav" />
    <div v-if="alert.message" :class="`alert ${alert.type}`">{{ alert.message }}</div>
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "app",
  components: {
    NavBar: NavBar
  },
  computed: {
    ...mapState({
      alert: state => state.alert
    })
  },
  methods: {
    ...mapActions({
      clearAlert: "alert/clear"
    })
  },
  watch: {
    $route(to, from) {
      to, from;
      // clear alert on location change
      this.clearAlert();
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Muli|Open+Sans|Playfair+Display:700i&display=swap");
// fonts:
// font-family: 'Open Sans', sans-serif;
// font-family: 'Muli', sans-serif;
// font-family: 'Playfair Display', serif;

:root {
  // TEXT
  font-size: 16px;
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

@mixin scrollbars(
  $size,
  $foreground-color,
  $background-color: mix($foreground-color, white, 50%)
) {
  &::-webkit-scrollbar {
    width: $size;
    height: $size;
  }

  &::-webkit-scrollbar-thumb {
    background: $foreground-color;
  }

  &::-webkit-scrollbar-track {
    background: $background-color;
  }
}

[v-cloak] {
  display: none;
}

body {
  color: var(--text-primary);
  background-color: var(--bg-primary);
  margin: 0;
  padding: 0;
  min-height: 100vh;
  // width: 100vw;
  overflow-x: hidden;
  @include scrollbars(0.5rem, #333, #eaecef);
}

.router-view {
  padding: 1rem;
  // height: 100vh;
}

// h1 {
//   font-family: "Muli", sans-serif;
// }

#nav {
  z-index: 20;
  width: 100%;
  background-color: var(--bg-primary);
  list-style: none;
  border-bottom: 1px solid #eaecef;
  // line-height: 40px;
}

a {
  outline: none;
}
</style>
