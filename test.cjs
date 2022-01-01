const test = require('@ava/v4');

test('exports ava (CJS)', t => {
	t.is(test, require('@ava/test'));
});
