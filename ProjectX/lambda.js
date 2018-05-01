let AWS = require('aws-sdk');
let mathjs = require('mathjs');
exports.handler = function (event, context, callback) {




	callback(null, 'Successfully executed CHathuraX' + mathjs.pow(2, 4));
}