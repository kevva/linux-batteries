import test from 'ava';
import m from './';

test(async t => {
	if (process.env.CI) {
		t.pass();
		return;
	}

	const batteries = await m();

	t.truthy(batteries.length);
	t.regex(/^battery_[^]+$/, batteries[0]);
});
