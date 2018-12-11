// Code your solution in this file!
const distanceFromHqInBlocks = function (distance) {
    let headquarters = 42
    let diff = distance - headquarters
    return diff < 0 ? diff * -1 : diff;
};

const distanceFromHqInFeet = function (distance) {
    let headquarters = 42
    let diff = distance - headquarters
     return diff < 0 ? diff * -264 : diff * 264;
};

const distanceTravelledInFeet = function (distance, destination) {
    let diff = destination - distance 
    return diff < 0 ? diff * -264 : diff * 264;
};

const calculatesFarePrice = function (distance, destination) {
    if (distanceTravelledInFeet(distance, destination) < 400) {
        return 0;
    } else if (distanceTravelledInFeet(distance, destination) <= 2000) {
        let sum = distanceTravelledInFeet(distance, destination) - 400 
        return sum * 0.02;
    } else if (distanceTravelledInFeet(distance, destination) < 2500 ) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
};



