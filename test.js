const test = require('@ava/v3');

test('exports ava', t => {
	t.is(test, require('.'));
});
