function scan(array) {
    let contrabandCount = 0;

    array.forEach(element => {
        if (element == "contraband") {
            contrabandCount += 1;
        }
    });

    return contrabandCount;
}