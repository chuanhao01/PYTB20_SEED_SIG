const cookieMonster = require('./controllers/cookieMonster');
const email = require('./controllers/email');

cookieMonster.createToken('this_is_test')
.then(
    function(token){
        console.log(token);
        return email.send('randomchuanhao01@gmail.com', token)
        .catch(
            function(err){
                console.log(err);
            }
        );
    }
)
.catch(
    function(err){
        console.log(err);
    }
);