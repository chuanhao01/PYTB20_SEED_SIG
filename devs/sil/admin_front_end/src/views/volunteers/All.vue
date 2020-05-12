<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <h1>Volunteers</h1>
      <div class="row">
        <div class="col-lg-12 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>NRIC</th>
                    <th>Date of Birth</th>
                    <th>Fullname</th>
                    <th>Contact Number</th>
                    <th>Email</th>
                    <th>Agree to be contacted</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <router-link to="/volunteer/12">
                      <td>A1234567I</td>
                    </router-link>
                    <td>1 Jan 2000</td>
                    <td>Name</td>
                    <td>+65 8123 4567</td>
                    <td>meow@abc.com</td>
                    <td class="text-success">Yes</td>
                  </tr>
                  <tr>
                    <td>A1234521I</td>
                    <td>14 Feb 2000</td>
                    <td>Meow</td>
                    <td>+65 8123 4325</td>
                    <td>email@abc.com</td>
                    <td class="text-danger">No</td>
                  </tr>
                  <tr>
                    <td>A6434567I</td>
                    <td>30 Dec 1999</td>
                    <td>VVVV</td>
                    <td>+65 8456 8987</td>
                    <td>hello@abc.com</td>
                    <td class="text-success">Yes</td>
                  </tr>
                  <tr>
                    <td>A1234098I</td>
                    <td>6 Mar 2001</td>
                    <td>Fullname</td>
                    <td>+65 8123 1298</td>
                    <td>marmar@abc.com</td>
                    <td class="text-success">No</td>
                  </tr>
                </tbody>
              </table>
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