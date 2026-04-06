import type test from '@ava/v7';
import {expectType} from 'tsd';
import pkg from './index.js';

expectType<typeof test>(pkg);
