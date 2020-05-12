<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <h1>Events</h1>
      <div class="row">
        <!-- card -->
        <div class="col-md-3 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div class="clearfix">
                <h4 class="card-title">Event 1</h4>
                <p class="card-description">This is what is going to happen in this event.</p>
                <!-- buttons -->
                <div class="btn-group d-flex">
                  <router-link class="btn btn-block btn-lg btn-gradient-info mt-4" to="/event/a">
                    View Event
                  </router-link>
                  <a
                    class="mdi mdi-dots-vertical mt-4 h2"
                    id="profileDropdown"
                    href="#"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  ></a>
                  <div class="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                    <a class="dropdown-item" href="#">
                      <i class="mdi mdi-grease-pencil mr-2 text-success"></i> Edit Event
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      <i class="mdi mdi-close-box mr-2 text-danger"></i> Close Registration
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>