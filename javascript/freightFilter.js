function scanAndFilter(array, remove) {
    let result = [];

    array.forEach(element => {
        if (element != remove) {
            result.push(element);
        }
    });

    return result;
}

const cargo = ['apples', 'ray guns', 'oranges', 'tacos', 'ray guns'];

const filteredCargo = scanAndFilter(cargo, 'ray guns');
console.log(filteredCargo);
// filteredCargo should now be ['apples', 'oranges', 'tacos']