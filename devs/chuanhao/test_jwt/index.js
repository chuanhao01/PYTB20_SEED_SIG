const jwt = require('jsonwebtoken');
const key = 'CAts';

const payload = {
    'data': 'hello'
};

const test_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODU3MjM5OTMsImRhdGEiOiJoZWxsbyIsImlhdCI6MTU4NTcyMzk4M30.a10wK9_jVMRVhzUHr7gSN5OkwUtj19Om3d89agY6ym4';

jwt.sign(payload, key, function(err, token){
    jwt.verify(token, key, function(err, decoded){
        console.log(decoded);
    });
});

// jwt.verify(test_token, key, function(err, decoded){
//     if(err){
//         console.log(err);
//         console.log(decoded);
//         return;
//     }
//     console.log('no err');
//     return;
// });


