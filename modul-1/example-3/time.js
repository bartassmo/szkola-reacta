let moment = require('moment'),
    currentTime;


setInterval(function() {
    currentTime = moment().format('DD.MM.YYYY --- HH:mm:ss');
    console.log(currentTime);
}, 1000);