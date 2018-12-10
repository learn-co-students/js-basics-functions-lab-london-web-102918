// Code your solution in this file!

function distanceFromHqInBlocks(pickup) {
  return pickup > 42 ? pickup - 42 : 42 - pickup;
};

function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup) * 264;
};

function distanceTravelledInFeet(pickup , dropoff) {
  return pickup > dropoff ? (pickup - dropoff) * 264 : (dropoff - pickup) * 264;
};

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
    if (distance < 400) {
      return 0;
    } else if (distance > 400 && distance < 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far'
    }
};
