const db = require('./db/index');
const utils = require('./utils/index');

// var my_user_id;
// db.users.createNewUser('t0123456i', utils.parseTime.convertTimeStamp(Date.now()), 'bob the builder', '+65 12345678', 'bobthebuilder@yeswecan.com')
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
//             return db.users.updateUserInfoByUserId(user_id, 'nani', utils.parseTime.convertTimeStamp(Date.now()), 'dab the bober', '+65 12345678', 'fuckyou@fuck.com'); 
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

var my_event_id;
db.events.createNewEvent('event1 abd', 'this is the test case', utils.parseTime.convertTimeStamp(Date.now()))
    .then(
        function(event_id){
            my_event_id = event_id;
            return db.events.getEventDataByEventId(event_id);
        }
    )
    .then(
        function(event){
            console.log(event);
            return event[0].event_id;
        }
    )
    .then(
        function(event_id){
            return db.events.updateEventDataByEventId(event_id, 'changed now you dont see me', 'what is the desc', utils.parseTime.convertTimeStamp(Date.now()), 1);
        }
    )
    .then(
        function(){
            return db.events.getEventDataByEventId(my_event_id);
        }
    )
    .then(
        function(event){
            console.log(event);
        }
    );