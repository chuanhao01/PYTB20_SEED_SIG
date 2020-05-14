import axios from 'axios';
import { saveAs } from 'file-saver';

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
    .get(`/api/events/${event_id}/signups`, { responseType: 'blob' })
    .then(result => {
      /* eslint-disable */
      console.log(result.data);
      saveAs(result.data, `${Date.now()}-${event_id}.csv`);
      return result.data;
    })
    .catch(error => {
      /* eslint-disable */
      console.error(error);
    });
}
