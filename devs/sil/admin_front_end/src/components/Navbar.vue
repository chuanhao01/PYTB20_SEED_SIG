<template>
  <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
      <router-link class="navbar-brand brand-logo" to="/">
        <img src="@/assets/images/syfc_logo-removebg.png" alt="logo" />
      </router-link>
      <router-link class="navbar-brand brand-logo-mini" to="/">
        <img src="@/assets/images/syfc_logo-small.png" alt="logo" />
      </router-link>
    </div>
    <div class="navbar-menu-wrapper d-flex align-items-stretch">
<!--       <button
        class="navbar-toggler navbar-toggler align-self-center"
        type="button"
        data-toggle="minimize"
      >
        <span class="mdi mdi-menu"></span>
      </button> -->
      <ul class="navbar-nav navbar-nav-right">
        <!-- full screen -->
        <li class="nav-item d-none d-lg-block full-screen-link">
          <a class="nav-link">
            <i class="mdi mdi-fullscreen" id="fullscreen-button"></i>
          </a>
        </li>
      </ul>
<!--       <button
        class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
        type="button"
        data-toggle="offcanvas"
      >
        <span class="mdi mdi-menu"></span>
      </button> -->
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>