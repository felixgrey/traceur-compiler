// Options: --member-variables --types --type-assertions --type-assertion-module=../TypeAssertions/resources/assert.js

import {AssertionError} from '../../asserts.js';
import '../TypeAssertions/resources/assert.js';

class C extends class {
  x: number;
} {
  y: number;
}

var c = new C();

assert.throw(() => { c.x  = 'str'}, AssertionError);
assert.throw(() => { c.y  = 'str'}, AssertionError);
