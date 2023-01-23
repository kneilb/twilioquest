const alive = process.argv[2];
const dryness = process.argv[3];

if (alive == 0 && dryness > 10) {
    console.log("WATER");
}