const db = require('../db/index');
const utils = require('../utils');

let user1, user2, user3, user4;
let event1, event2;

db.users.createNewUser('t01234556i', utils.parseTime.convertTimeStamp('1977-01-01'), 'user1', '+65 12345678', 'a@a1.com', 1)
.then(
    function(user_id){
        user1 = user_id;
    }
);
db.users.createNewUser('t01234556i', utils.parseTime.convertTimeStamp('1977-01-01'), 'user2', '+65 12345678', 'a@a1.com', 1)
.then(
    function(user_id){
        user2 = user_id;
    }
);
db.users.createNewUser('t01234556i', utils.parseTime.convertTimeStamp('1977-01-01'), 'user3', '+65 12345678', 'a@a1.com', 1)
.then(
    function(user_id){
        user3 = user_id;
    }
);
db.users.createNewUser('t01234556i', utils.parseTime.convertTimeStamp('1977-01-01'), 'user4', '+65 12345678', 'a@a1.com', 1)
.then(
    function(user_id){
        user4 = user_id;
    }
);
db.users.createNewUser('t01234556i', utils.parseTime.convertTimeStamp('1977-01-01'), 'user5', '+65 12345678', 'a@a1.com', 1);

db.events.createNewEvent('event1', 'this is events', utils.parseTime.convertTimeStamp('2020-10-01'))
.then(
    function(event_id){
        event1 = event_id;
    }
);
db.events.createNewEvent('event2', 'this is events', utils.parseTime.convertTimeStamp('2020-10-01'))
.then(
    function(event_id){
        event2= event_id;
    }
);
db.events.createNewEvent('event3', 'this is events', utils.parseTime.convertTimeStamp('2020-10-01'));
db.events.createNewEvent('event4', 'this is events', utils.parseTime.convertTimeStamp('2020-10-01'));

// db.signups.createSignup(user1, event1);
// db.signups.createSignup(user2, event1);
// db.signups.createSignup(user3, event1);
// db.signups.createSignup(user4, event2);
