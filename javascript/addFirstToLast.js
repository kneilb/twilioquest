function addFirstToLast(array) {
    let firstAndLast = "";

    if (array.length > 0) {
        firstAndLast = array[0] + array[array.length - 1];
    }

    return firstAndLast;
}
