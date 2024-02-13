const jsc = require('jsverify');
const { divideAndConquerSum } = require('./code.js');

const testDivideAndConquerSum = jsc.forall("array nat", function (arr) {
    const expectedSum = arr.reduce((a, b) => a + b, 0);
    const calculatedSum = divideAndConquerSum(arr, 0, arr.length - 1);
    return expectedSum === calculatedSum;
});

jsc.assert(testDivideAndConquerSum);
