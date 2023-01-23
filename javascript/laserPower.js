function calculatePower(array) {
    // const newArray = array.map((value) => value * 2);

    return array.reduce((acc, val) => acc + val * 2, 0)
}