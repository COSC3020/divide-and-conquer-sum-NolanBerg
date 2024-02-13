function divideAndConquerSum(arr, low, high) {
    while (low <= high) {
        if (low === high) {
            return arr[low];
        }

        const oneThird = Math.floor((2 * low + high) / 3);
        const twoThird = Math.floor((low + 2 * high) / 3);

        return (
            divideAndConquerSum(arr, low, oneThird) +
            divideAndConquerSum(arr, oneThird + 1, twoThird) +
            divideAndConquerSum(arr, twoThird + 1, high)
        );
    }

    return 0;
}

module.exports = { divideAndConquerSum };
