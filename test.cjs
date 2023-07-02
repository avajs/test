const test = require('@ava/v5');

test('exports ava (CJS)', t => {
	t.is(test, require('@ava/test'));
});
