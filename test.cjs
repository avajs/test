const test = require('@ava/v7');

test('exports ava (CJS)', t => {
	t.is(test, require('@ava/test'));
});
