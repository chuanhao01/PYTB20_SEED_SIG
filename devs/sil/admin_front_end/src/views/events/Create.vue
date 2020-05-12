<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <div class="page-header">
        <h3 class="page-title">Create Event</h3>
      </div>
      <div class="row">
        <div class="col-12 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <form class="createEventForm">
                <div class="form-group">
                  <label for="eventTitle">Title</label>
                  <input type="text" class="form-control" id="eventTitle" placeholder="Title" />
                </div>
                <div class="form-group">
                  <label for="eventDescription">Description</label>
                  <textarea class="form-control" id="eventDescription" rows="4"></textarea>
                </div>
                <div class="form-group">
                  <label for="eventDate">Date</label>
                  <input type="date" class="form-control" id="eventDate" placeholder="Date" />
                </div>
                <button type="submit" class="btn btn-gradient-info mr-2">Submit</button>
                <button class="btn btn-light">Cancel</button>
              </form>
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