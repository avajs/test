import test from '@ava/v8';

test('exports ava', async t => {
	const {default: exported} = await import('@ava/test');
	t.is(test, exported);
});
