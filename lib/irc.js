var skype = require("skype-api"),
    EventEmitter = require("events").EventEmitter;

exports.event = new EventEmitter();

skype.on("message", function(data) {
    exports.event.emit("msg", data.user, data.room, data.message);
});

var client = {
    "say": function(to, message) {
        skype.sendMessage(to, message, function(err, msg) { if (err) console.log(err); });
    }
}

exports.client = client;