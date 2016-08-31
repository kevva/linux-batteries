import test from 'ava';
import m from './';

if (!process.env.CI) {
	test(async t => {
		const batteries = await m();

		t.truthy(batteries.length);
		t.regex(/^battery_[^]+$/, batteries[0]);
	});
}
