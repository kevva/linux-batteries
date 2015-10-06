import test from 'ava';
import linuxBatteries from './';

if (!process.env.CI) {
	test(async t => {
		t.plan(2);

		const batteries = await linuxBatteries();

		t.ok(batteries.length);
		t.regexTest(/^battery_[^]+$/, batteries[0]);
	});
}
