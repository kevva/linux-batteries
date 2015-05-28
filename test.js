'use strict';
var test = require('ava');
var linuxBatteries = require('./');

if (!process.env.CI) {
	test(function (t) {
		t.plan(3);

		linuxBatteries(function (err, batteries) {
			t.assert(!err, err);
			t.assert(batteries.length, batteries);
			t.assert(/^battery_[^]+$/.test(batteries[0]));
		});
	});
}
