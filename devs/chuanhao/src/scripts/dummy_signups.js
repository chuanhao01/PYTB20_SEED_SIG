const db = require('../db/index');
const utils = require('../utils');

let user1 = 'f26fec43-9c2f-4724-bac1-6aff1dd2cc02',
    user2 = '4cc0e661-8b28-4726-b71a-3bd5201c30f4',
    user3 = '205c09f8-8371-4f2e-86d7-c2aae5163c5d',
    user4 = 'f306dade-966f-4368-86b7-e920d063c4b3';

let event1 = '33e335ec-6611-4f0d-9f84-75c09963a35f',
    event2 = 'a1d9a30f-a22c-4bd3-8721-3de379f8831c';

// db.signups.createSignup(event1, user1);
// db.signups.createSignup(event1, user2);
// db.signups.createSignup(event1, user3);
// db.signups.createSignup(event2, user4);

// db.signups.deleteUserSignUpForEvent(event1, user1);
// db.signups.deleteUserSignUpForEvent(event2, user4);

db.events.closeEventAndSignups(event2);
