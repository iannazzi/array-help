const assert = require('assert');
const array_help = require('..');

let a = 'string';
let result = array_help.is_array(a)
assert.equal(result, false);
console.log(`\u001B[32m✓\u001B[39m ${result}`);


