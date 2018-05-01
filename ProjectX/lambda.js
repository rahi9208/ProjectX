let AWS = require('aws-sdk');
let mathjs = require('mathjs');
exports.handler = function (event, context, callback) {




	callback(null, 'Successfully executed CHathura' + mathjs.pow(2, 4));
}