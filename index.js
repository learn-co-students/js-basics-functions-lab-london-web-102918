// Code your solution in this file!

function distanceFromHqInBlocks(block) {
    if (block < 42) {
        return 42 - block;
    } else {
        return block - 42;
    }
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, destination) {
    let distance = (start - destination) * 264;
    result = Math.abs(distance);
    return result;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    let fare
    if (distance < 400) {
        fare = 0;
    } else if (distance > 2500) {
        fare = "cannot travel that far";
    } else if (distance > 400 && distance < 2000) {
        fare = 0.02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
        fare = 25;
    }
    return fare
}