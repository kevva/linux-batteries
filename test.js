import test from 'ava';
import m from './';

test(async t => {
	if (process.env.CI) {
		t.pass();
		return;
	}

	const batteries = await m();

	t.truthy(batteries.length);
	t.is(typeof batteries[0], 'string');
});
