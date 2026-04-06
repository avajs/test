import test from '@ava/v7';

test('exports ava (ESM)', async t => {
	const {default: exported} = await import('@ava/test');
	t.is(test, exported);
});
