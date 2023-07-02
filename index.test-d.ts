import test from '@ava/v5';
import {expectType} from 'tsd';
import pkg from '.';

expectType<typeof test>(pkg);
