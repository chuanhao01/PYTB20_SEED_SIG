import axios from 'axios';

export const signUpService = {
  getSignUpById,
  updateSignUp,
  getSignUpByEventId
};

function getSignUpById(signup_id) {
  return axios
    .get(`/api/signups/${signup_id}`)
    .then(result => {
      /* eslint-disable */
      console.log(result.data);
      return result.data;
    })
    .catch(error => {
      /* eslint-disable */
      console.error(error);
    });
}

function updateSignUp(signup) {
  return axios
    .put(`/api/signups/${signup.signup_id}`, signup)
    .then(result => {
      /* eslint-disable */
      console.log(result.data);
      console.log("update success");
      return result.data;
    })
    .catch(error => {
      /* eslint-disable */
      console.error(error);
    });
}

function getSignUpByEventId(event_id) {
  return axios
    .get(`/api/events/${event_id}/signups`)
    .then(result => {
      /* eslint-disable */
      console.log(result.data);
      return result.data;
    })
    .catch(error => {
      /* eslint-disable */
      console.error(error);
    });
}
