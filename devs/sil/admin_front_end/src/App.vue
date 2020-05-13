<template>
  <div id="app">
    <div class="container-scroller">
      <Navbar />
      <div class="container-fluid page-body-wrapper">
        <Sidebar />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import vendor from "@/assets/vendors/js/vendor.bundle.base.js";
// import offcanvas from "@/assets/js/off-canvas.js";
// import hoverablecollapse from "@/assets/js/hoverable-collapse.js";
import misc from "@/assets/js/misc.js";


export default {
  name: "Dashboard",
  components: {
    Navbar: Navbar,
    Sidebar: Sidebar
  }
};
</script>

<style lang="scss">
@import "./assets/css/style.css";
@import "./assets/vendors/mdi/css/materialdesignicons.min.css";
@import "./assets/vendors/css/vendor.bundle.base.css";
</style>
