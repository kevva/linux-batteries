import test from 'ava';
import fn from './';

if (!process.env.CI) {
	test(async t => {
		t.plan(2);

		const batteries = await fn();

		t.ok(batteries.length);
		t.regexTest(/^battery_[^]+$/, batteries[0]);
	});
}
