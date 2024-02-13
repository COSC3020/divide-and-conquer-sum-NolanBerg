const jsc = require('jsverify');
const { divideAndConquerSum } = require('./code.js');

const testDivideAndConquerSum = jsc.forall("array nat", function (arr) {
    return divideAndConquerSum(arr, 0, arr.length - 1) === arr.reduce((a, b) => a + b, 0);
});

jsc.assert(testDivideAndConquerSum);
