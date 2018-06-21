var os = require('os');

function timeFormat() {
    var uptime = os.uptime();
    var hours = (uptime / 3600).toFixed(0);
    var minutes = (uptime / 60).toFixed(0);
    var seconds = (uptime % 60);
    var console.log('Uptime: ~' + hours + ' godz. ' + minutes + ' min. ' + seconds + ' sek.');
}

exports.time = timeFormat;