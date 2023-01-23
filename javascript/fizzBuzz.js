const number = process.argv[2];

let result = "";

if (number % 3 == 0) {
    result += "Java";
}
if (number % 5 == 0) {
    result += "Script";
}

if (result == "") {
    result = number;
}

console.log(result);