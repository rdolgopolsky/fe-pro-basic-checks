import {
  fenceString,
  consoleLoggerWordsSplit,
  consoleLoggerWordsWhile,
  consoleLoggerWordsForOf,
  consoleLoggerWordsFor,
  reducerIf,
  reducerSwitch,
  capitalizeString,
} from './index.js';

console.log(fenceString('Hi all to all and all')); // hI AlL To aLl aNd aLl

console.log(capitalizeString('test test test')); // Test Test Test

consoleLoggerWordsSplit('test');
// t
// e
// s
// t

consoleLoggerWordsWhile('test');
// t
// e
// s
// t
consoleLoggerWordsForOf('test');
// t
// e
// s
// t
consoleLoggerWordsFor('test');
// t
// e
// s
// t

console.log(reducerIf('uppercase', 'string')); // STRING
console.log(reducerIf('lowercase', 'STRing')); // string
console.log(reducerIf('fence', 'string')); // sTrInG
console.log(reducerIf('capitalize', 'test test')); // Test Test
console.log(reducerIf('bla', 'string')); // string

console.log(reducerSwitch('uppercase', 'string')); // STRING
console.log(reducerSwitch('lowercase', 'STRing')); // string
console.log(reducerSwitch('fence', 'string')); // sTrInG
console.log(reducerSwitch('capitalize', 'test test')); // Test Test
console.log(reducerSwitch('bla', 'string')); // string