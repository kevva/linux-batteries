'use strict';
const execa = require('execa');

module.exports = () => {
	return execa.stdout('upower', ['-e']).then(stdout => {
		stdout = stdout.trim().split('\n')
			.filter(x => /battery_[^]+$/.test(x))
			.map(x => /battery_([^]+)$/.exec(x)[1]);

		if (!stdout || stdout.length === 0) {
			throw new Error('No battery found');
		}

		return stdout;
	});
};
