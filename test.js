'use strict';
var test = require('ava');
var linuxBatteries = require('./');

if (!process.env.CI) {
	test(function (t) {
		t.plan(2);

		linuxBatteries().then(function (batteries) {
			t.assert(batteries.length, batteries);
			t.assert(/^battery_[^]+$/.test(batteries[0]));
		});
	});
}
