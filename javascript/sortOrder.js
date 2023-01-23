// const arg1 = 0;
// const arg2 = 0;

function compare(arg1, arg2) {
    if (arg1 < arg2) {
        return -1;
    }
    if (arg1 > arg2) {
        return 1;
    }
    return 0;
}

console.log(compare(process.argv[2].toLowerCase(), process.argv[3].toLowerCase()))