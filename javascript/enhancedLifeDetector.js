const treeStatusId = process.argv[2];

let treeStatusString = "other";

if (treeStatusId == 0) {
    treeStatusString = "alive";
} else if (treeStatusId == 1) {
    treeStatusString = "flowering";
} else if (treeStatusId == 2) {
    treeStatusString = "shedding";
}

console.log(treeStatusString);