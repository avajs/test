import type test from '@ava/v6';
import {expectType} from 'tsd';
import pkg from '.';

expectType<typeof test>(pkg);
