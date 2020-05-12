<template>
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <li class="nav-item">
        <router-link to="/" class="nav-link">
          <span class="menu-title">Dashboard</span>
          <i class="mdi mdi-home menu-icon"></i>
        </router-link>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          data-toggle="collapse"
          href="#events"
          aria-expanded="false"
          aria-controls="ui-basic"
        >
          <span class="menu-title">Events</span>
          <i class="menu-arrow"></i>
          <i class="mdi mdi-crosshairs-gps menu-icon"></i>
        </a>
        <div class="collapse" id="events">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <router-link class="nav-link" to="/events/all">All Events</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/events/current">Current Events</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/events/past">Past Events</router-link>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/volunteers">
          <span class="menu-title">Volunteers</span>
          <i class="mdi mdi-contacts menu-icon"></i>
        </router-link>
      </li>
      <li class="nav-item sidebar-actions">
        <router-link to="/events/create" class="nav-link">
          <button class="btn btn-block btn-lg btn-gradient-info mt-4">+ Add Events</button>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>