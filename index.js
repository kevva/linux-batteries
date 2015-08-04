'use strict';
var execFile = require('child_process').execFile;

module.exports = function (cb) {
	execFile('upower', ['-e'], function (err, stdout) {
		if (err) {
			cb(err);
			return;
		}

		stdout = stdout.trim().split('\n').filter(function (el) {
			return /battery_[^]+$/.test(el);
		}).map(function (el) {
			return /battery_[^]+$/.exec(el)[0];
		});

		if(!stdout || stdout.length === 0){
			cb(new Error('No battery found'));
			return;
		}

		cb(null, stdout);
	});
};
