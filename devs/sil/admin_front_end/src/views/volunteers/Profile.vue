<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <h1>{{ fullname }}</h1>
      <div class="row">
        <div class="col-lg-12 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-4">
                  <h3 class="card-title">Personal Info</h3>
                  <div class="row mt-2">
                      <div class="col-6"><strong>Fullname</strong></div>
                      <div class="col-6">{{fullname}}</div>
                  </div>
                  <div class="row mt-1">
                      <div class="col-6"><strong>NRIC</strong></div>
                      <div class="col-6">{{nric}}</div>
                  </div>
                  <div class="row mt-1">
                      <div class="col-6"><strong>Date of Birth</strong></div>
                      <div class="col-6">{{dob}}</div>
                  </div>
                  <div class="row mt-1">
                      <div class="col-6"><strong>Contact Number</strong></div>
                      <div class="col-6">{{contact_num}}</div>
                  </div>
                  <div class="row mt-1">
                      <div class="col-6"><strong>Email</strong></div>
                      <div class="col-6">{{email}}</div>
                  </div>
                  <div class="row mt-1">
                      <div class="col-6"><strong>Agree to be contacted</strong></div>
                      <div class="col-6">{{PDPA? "Yes":"No"}}</div>
                  </div>
                </div>

                <div class="col-md-8">
                  <h3 class="card-title">History</h3>
                  <table class="table">
                      <thead>
                          <tr>
                              <th>#</th>
                              <th>Event Date</th>
                              <th>Event Title</th>
                              <th>Event Status</th>
                              <th>Role</th>
                              <th>Insurance</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>1</td>
                              <td>1 Jan 2020</td>
                              <td>Meow Event</td>
                              <td class="text-danger">Ended</td>
                              <td>Watcher</td>
                              <td class="text-success">Claimed</td>
                          </tr>
                      </tbody>
                  </table>
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
export default {
  data: function() {
    return {
      nric: "A1234567I",
      dob: "01-01-2000",
      fullname: "Name",
      contact_num: "+65 8123 4567",
      email: "meow@abc.com",
      PDPA: 1
    };
  }
};
</script>

<style>
</style>