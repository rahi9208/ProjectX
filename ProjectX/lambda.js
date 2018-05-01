let AWS = require('aws-sdk');
let mathjs = require('mathjs');
let uuid = require("uuid");
exports.handler = function (event, context, callback) {




	callback(null, 'Successfully executed CHathuraXYZDo' + mathjs.pow(2, 4) + uuid.v4());
}