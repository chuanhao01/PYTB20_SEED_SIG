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
        <h3 class="page-title">Participants</h3>
      </div>
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
                  <tr v-for="signup in signUps" :key="signup.signup_id">
                    <td>{{signup.nric}}</td>
                    <td>{{signup.dob}}</td>
                    <td>{{signup.fullname}}</td>
                    <!-- <td>{{signup.contact_num}}</td> -->
                    <!-- <td>{{signup.email}}</td> -->
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
              <button class="btn btn-gradient-info mt-4" onclick="#">Export as CSV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Participants",
  data: () => {
    return {
      // signUps:{}
    };
  },
  created() {
    this.getSignUpByEventId(this.$route.params.eventId);
  },
  computed: {
    ...mapState({
      signUps: state => state.events.signUps,
      signUp: state => state.events.signUp
    })
  },
  methods: {
    ...mapActions("signups", {
      getSignUpByEventId: "getSignUpByEventId"
    })
  }
};
</script>

<style>
</style>