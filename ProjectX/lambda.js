let AWS = require('aws-sdk');
let mathjs = require('mathjs');
let uuid = require("uuid");
var loremIpsum = require('lorem-ipsum');
var casual = require('casual');
exports.handler = function (event, context, callback) {




	callback(null, 'Successfully executed Widanage'
		+ mathjs.pow(2, 4) + uuid.v4() + loremIpsum() + casual.sentence);
}