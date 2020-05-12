<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <div class="page-header">
        <form>
          <input
            class="btn btn-inverse-info p-3"
            type="button"
            value="← Go Back"
            onclick="history.go(-1)"
          />
        </form>
      </div>
      <div class="page-header">
        <h3 class="page-title d-block">Event 1</h3>
      </div>
      <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">What is this event all about?</h4>
              <p class="card-description">
                <i class="mdi mdi-calendar"></i> 15 May 2020
              </p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley not only five centuries,</p>
              <router-link
                class="btn btn-lg btn-gradient-info mt-4 mr-4"
                to="/event/a/participants"
              >View Participants</router-link>
              <router-link class="btn btn-lg btn-gradient-info mt-4 mr-4" to="/event/a/edit">Edit Event</router-link>
              <router-link to="#" class="btn btn-lg btn-gradient-info mt-4 mr-4">Close Registration</router-link>
              <router-link to="#" class="btn btn-lg btn-gradient-danger mt-4 mr-4">Close Event</router-link>
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