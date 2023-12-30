const test = require('@ava/v6');

test('exports ava (CJS)', t => {
	t.is(test, require('@ava/test'));
});
