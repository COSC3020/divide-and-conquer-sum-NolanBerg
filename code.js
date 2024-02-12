function divideAndConquerSum(a) {
return divideAndConquerSum(a, 0, a.length-1);
}

function divideAndConquerSum(a, low, high) {

if(high == low)
return a[low];

var mid1 = low + (high - low)/3;
var mid2 = mid1 + (high - low)/3;

return divideAndConquerSum(a, low, mid1 - 1) + divideAndConquerSum(a, mid1 + 1, mid2 - 1) + divideAndConquerSum(a, mid2 + 1, high);
}
