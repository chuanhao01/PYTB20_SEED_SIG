const model = require('./db/index');
const utils = require('./utils/index');

model.events.createNewEvent('event3', 'This is what is happening in event3', utils.parseTime.convertTimeStamp('2020-05-22'))
    .then(
        function (event_id) {
            console.log(event_id);
        }
    );
model.events.createNewEvent('event5',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati aut quam ex dolore laborum, laudantium, fuga culpa omnis dignissimos accusamus aliquid repellendus recusandae natus! In blanditiis ex aliquid omnis fugiat?',
    utils.parseTime.convertTimeStamp('2020-05-22'))
    .then(
        function (event_id) {
            console.log(event_id);
        }
    );
model.events.createNewEvent('event6', 'This is what is happening in event6', utils.parseTime.convertTimeStamp('2020-05-22'))
    .then(
        function (event_id) {
            console.log(event_id);
        }
    );