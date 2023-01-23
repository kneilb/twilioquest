function getFirstAmountSorted(array, count) {
    array.sort();

    return array.slice(0, count);
}