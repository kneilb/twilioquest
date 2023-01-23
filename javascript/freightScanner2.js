function scan(array) {
    let results = [];

    array.forEach((element, index) => {
        if (element == "contraband") {
            results.push(index);
        }
    });

    return results;
}

const indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Contraband Indexes: ' + indexes); // should be [1, 4]