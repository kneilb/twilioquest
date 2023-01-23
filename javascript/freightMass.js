function calculateMass(array) {
    return array.reduce((acc, current) => acc + current.length, 0);
}

const cargo = ['cat', 'dog', 'bird'];

const mass = calculateMass(cargo);
// mass should now be 10
console.log(mass);