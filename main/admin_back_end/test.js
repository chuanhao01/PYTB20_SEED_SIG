const db = require('./db/index');

// let event1 = '6b184538-4407-4be2-b773-e307dde6aab2';
// db.signups.getAllSignUpsForEventByEventId(event1)
// .then(
//     function(data){
//         console.log(data);
//     }
// );

let data = [
  {
    user_id: '38bbd9da-ff61-49ed-99fb-1df68e72647a',
    signup_id: '02711711-ccd2-437c-b1ca-b9f3030f9778',
    status: 0,
    time_created: '2020-04-23T11:58:39.000Z',
    last_modified: '2020-04-23T11:58:39.000Z',
    fullname: 'user2',
    dob: '1976-12-31T16:30:00.000Z',
    nric: 't01234556i'
  },
  {
    user_id: '5fd019fa-ab0b-4136-85f7-bf0d04765ba5',
    signup_id: '072de5f1-b1d1-4e97-bf28-fa9393666abc',
    status: 0,
    time_created: '2020-04-23T11:58:39.000Z',
    last_modified: '2020-04-23T11:58:39.000Z',
    fullname: 'user1',
    dob: '1976-12-31T16:30:00.000Z',
    nric: 't01234556i'
  },
  {
    user_id: '57c997b6-e0eb-49c4-a800-3a9ff67b76db',
    signup_id: '741dabd5-205b-4b9c-8a7c-2e532fd3f126',
    status: 0,
    time_created: '2020-04-23T11:59:17.000Z',
    last_modified: '2020-04-23T11:59:17.000Z',
    fullname: 'user4',
    dob: '1976-12-31T16:30:00.000Z',
    nric: 't01234556i'
  },
  {
    user_id: '4b2fdcca-589f-40d8-ae9e-b783cfd1796f',
    signup_id: '8167e30d-1014-4a05-84c8-665469d214f2',
    status: 0,
    time_created: '2020-04-23T11:58:39.000Z',
    last_modified: '2020-04-23T11:58:39.000Z',
    fullname: 'user3',
    dob: '1976-12-31T16:30:00.000Z',
    nric: 't01234556i'
  }
];

const utils = require('./utils/index');

utils.csv.generateCsv(data)
.then(
    function(file_path){
        return new Promise((resolve) => {
            console.log(file_path);
            resolve(file_path);
        });
    }
)
.then(
    function(file_path){
        return utils.csv.deleteCsvFile(file_path);
    }
);
