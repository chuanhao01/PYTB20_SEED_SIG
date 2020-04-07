const db = require('./db/index');
const utils = require('../test_server/utils');

// var my_user_id;
// db.users.createNewUser('t0123456i', utils.parseTime.convertTimeStamp('1965-1-1'), 'bob the builder', '+65 12345678', 'bobthebuilder@yeswecan.com')
//     .then(
//         function(user_id){
//             my_user_id = user_id;
//             return db.users.getUserDataByUserId(user_id);
//         }
//     )
//     .then(
//         function(user){
//             console.log(user);
//             return user[0].user_id;
//         }
//     )
//     .then(
//         function(user_id){
//             return db.users.updateUserInfoByUserId(user_id, 'nani', utils.parseTime.convertTimeStamp(Date.now()), 'dab the bober', '+65 12345678', 'fuckyou@fuck.com', 0); 
//         }
//     )
//     .then(
//         function(){
//             return db.users.getUserDataByUserId(my_user_id);
//         }
//     )
//     .then(
//         function(user){
//             console.log(user);
//         }
//     );

// var my_event_id;
// db.events.createNewEvent('event1 abd', 'this is the test case', utils.parseTime.convertTimeStamp(Date.now()))
//     .then(
//         function(event_id){
//             my_event_id = event_id;
//             return db.events.getEventDataByEventId(event_id);
//         }
//     )
//     .then(
//         function(event){
//             console.log(event);
//             return event[0].event_id;
//         }
//     )
//     .then(
//         function(event_id){
//             return db.events.updateEventDataByEventId(event_id, 'event2', 'what is the desc', utils.parseTime.convertTimeStamp(Date.now()), 1);
//         }
//     )
//     .then(
//         function(){
//             return db.events.getEventDataByEventId(my_event_id);
//         }
//     )
//     .then(
//         function(event){
//             console.log(event);
//         }
//     );

let user_id = 'd2df403f-f424-48cb-9757-55293770a518';
let event_id = '0ccd156b-7cef-4e4e-9302-ebffb3a1b08b';
// let email = 'hello@hello.com';

// db.users.checkUserEmail(email)
// .then(
//     function(a){
//         console.log(a);
//     }
// );

// db.signups.checkUserSignUpEvent(event_id, user_id)
// .then(
//     function(data){
//         console.log(data);
//     }
// );

// db.signups.deleteUserSignUpForEvent(event_id, user_id)
// .then(
//     function(data){
//         console.log(data);
//     }
// );

// db.signups.getEventsUserParticipated(user_id)
// .then(
//     function(data){
//         console.log(data);
//     }
// );

// db.signups.createSignup(event_id, user_id)
// .then(
//     function(signup_id){
//         console.log(signup_id);
//     }
// );

// db.signups.getEventsUserSignUp(user_id)
// .then(
//     function(data){
//         console.log(data);
//     }
// );

// let date = '2019-02';
// console.log(utils.parseTime.convertTimeStamp(date));

// let event1 = '33e335ec-6611-4f0d-9f84-75c09963a35f';
// let event2 = 'a1d9a30f-a22c-4bd3-8721-3de379f8831c';
// db.events.checkEventIsOpen(event1).then(check => console.log(check));

// let user1 = 'f26fec43-9c2f-4724-bac1-6aff1dd2cc02';
// db.users.checkIfUserExistsByUserId(user1).then(check => console.log(check));
// db.signups.getAllSignUpsForEventByEventId(event1).then(data => console.log(data));

utils.jwtToken.decodeAccessToken('').then(data => console.log(data));
