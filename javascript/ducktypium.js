function validateColour(colour) {
    const validColours = ["red", "blue", "yellow"];
    if (!validColours.includes(colour)) {
        // throw Error("Invalid Colour!");
    }
}

class Ducktypium {
    constructor(colour) {
        validateColour(colour);

        this.color = colour; // sic
        this.calibrationSequence = [];
    }

    refract(colour) {
        validateColour(colour);

        if (colour == this.color) {
            return colour;
        }

        const colours = [this.color, colour];

        if (colours.includes("red") && colours.includes("blue")) {
            return "purple";
        }
        if (colours.includes("red") && colours.includes("yellow")) {
            return "orange";
        }
        if (colours.includes("yellow") && colours.includes("blue")) {
            return "green";
        }
    }

    calibrate(array) {
        this.calibrationSequence = array.sort().map((element) => element * 3);
    }
}


// The following would produce an error
try {
    const badColor = new Ducktypium("pink");
} catch (e) {
    console.log("Color must be red, yellow, or blue!");
}

// Create a new instance of the class
const dt = new Ducktypium("red");

console.log(dt.color); // prints 'red'

console.log(dt.refract("blue")); // prints 'purple'
console.log(dt.refract("red")); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]