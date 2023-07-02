#!/usr/bin/env node
import {createRequire} from 'node:module';
import {pathToFileURL} from 'node:url';

const require = createRequire(import.meta.url);
const mainEntrypoint = pathToFileURL(require.resolve('@ava/v5'));
import(new URL('cli.mjs', mainEntrypoint));
