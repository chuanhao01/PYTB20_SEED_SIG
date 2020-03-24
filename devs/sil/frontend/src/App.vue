<template>
  <div id="app">
    <NavBar id="nav" />
    <router-view class="router-view" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar: NavBar
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

body {
  color: var(--text-primary);
  background-color: var(--bg-primary);
  margin: 0;
  padding: 0;
  @include scrollbars(0.5rem, #333, #eaecef);
}

.router-view {
  margin: 5rem auto;
  padding: 1rem;
}

h1 {
  font-family: "Muli", sans-serif;
}

#nav {
  z-index: 20;
  height: 5rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--bg-primary);
  list-style: none;
  overflow: hidden;
  border-bottom: 1px solid #eaecef;
}
</style>
