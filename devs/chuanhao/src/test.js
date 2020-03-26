const db = require('./db/index');
const utils = require('./utils/index');

// const user_id = db.users.createNewUser('t0123456i', utils.parseTime.convertTimeStamp(Date.now()), 'bob the builder', '+65 12345678', 'bobthebuilder@yeswecan.com');
// console.log(db.users.getUserDataByUserId(user_id));
// db.users.updateUserInfoByUserId(user_id, 'nani', utils.parseTime.convertTimeStamp(Date.now()), 'dab the bober', '+65 12345678', 'fuckyou@fuck.com');

var my_user_id;

db.users.createNewUser('t0123456i', utils.parseTime.convertTimeStamp(Date.now()), 'bob the builder', '+65 12345678', 'bobthebuilder@yeswecan.com')
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


