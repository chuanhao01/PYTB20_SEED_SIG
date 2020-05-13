import axios from 'axios';
// import { eventService } from "./event.service";

export const signupService = {
  // getAllSignUps,
  createSignUp,
  deleteSignUp
};

function createSignUp(event_id) {
  return axios
    .post(`/api/events/${event_id}/signups`)
    .then(result => {
      /* eslint-disable */
      console.log(result);
      /* eslint-disable */
      console.log("volunteer success");
      return result;
    })
    .catch(error => {
      /* eslint-disable */
      console.error(error);
    });
}

function deleteSignUp(event_id) {
  return axios
    .delete(`/api/events/${event_id}/signups`)
    .then(result => {
      /* eslint-disable */
      console.log(result);
      /* eslint-disable */
      console.log("unvolunteered");
      return result;
    })
    .catch(error => {
      /* eslint-disable */
      console.error(error);
    });
}
