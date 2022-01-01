import test from '@ava/v4';
import {expectType} from 'tsd';
import pkg from '.';

expectType<typeof test>(pkg);
