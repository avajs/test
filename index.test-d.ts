import test from '@ava/v3';
import {expectType} from 'tsd';
import pkg from '.';

expectType<typeof test>(pkg);
