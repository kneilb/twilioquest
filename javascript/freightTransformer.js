function transform(array) {
    return array.map((element) => {
        return element.toUpperCase();
    });
}


const cargo = ["apples", "ray guns", "oranges"];

const transformedCargo = transform(cargo);
// transformedCargo should now be ['APPLES', 'RAY GUNS', 'ORANGES']
console.log(transformedCargo);