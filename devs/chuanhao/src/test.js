const db = require('./db/index');
const utils = require('./utils/index');
const validator = require('validator');

var my_user_id;
db.users.createNewUser('t0123456i', utils.parseTime.convertTimeStamp('1965-1-1'), 'bob the builder', '+65 12345678', 'bobthebuilder@yeswecan.com')
    .then(
        function(user_id){
            my_user_id = user_id;
            return db.users.getUserDataByUserId(user_id);
        }
    )
    .then(
        function(user){
            console.log(user);
            return user[0].user_id;
        }
    )
    .then(
        function(user_id){
            return db.users.updateUserInfoByUserId(user_id, 'nani', utils.parseTime.convertTimeStamp(Date.now()), 'dab the bober', '+65 12345678', 'fuckyou@fuck.com'); 
        }
    )
    .then(
        function(){
            return db.users.getUserDataByUserId(my_user_id);
        }
    )
    .then(
        function(user){
            console.log(user);
        }
    );

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

// let user_id = 'efc4747d-6d87-4179-b7a1-cea4e689bb7b';
// let event_id = 'eb4b133b-0a29-476f-923e-6bc03c912058';
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

// let date = '2019-02';
// console.log(utils.parseTime.convertTimeStamp(date));