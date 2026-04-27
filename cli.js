#!/usr/bin/env node
const mainEntrypoint = import.meta.resolve('@ava/v8');
import(new URL('cli.js', mainEntrypoint));
