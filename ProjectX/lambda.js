let AWS = require('aws-sdk');
let mathjs = require('mathjs');
exports.handler = function (event, context, callback) {




	callback(null, 'Successfully executed XYZM' + mathjs.pow(2, 4));
}