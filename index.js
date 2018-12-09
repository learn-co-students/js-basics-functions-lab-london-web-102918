// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  let result;
  result = someValue - 42;
  return Math.abs(result);
}

function distanceFromHqInFeet (someValue) {
  let result;
  result = distanceFromHqInBlocks(someValue)*264;
  return result
}

function distanceTravelledInFeet(startValue, endValue) {
  let result;
  result = (startValue - endValue)*264;
  return Math.abs(result);
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function calculatesFarePrice (startValue, endValue) {
  let fare;
  let distance = distanceTravelledInFeet(startValue, endValue);
  if (distance <= 400) {
    fare = 0;
  }
  else if (distance <= 2000) {
    fare = 0.02*(distance-400);
  }
  else if (distance <= 2500){
    fare = 25;
  }
  else {
    fare = 'cannot travel that far';
  }
  return fare;
}
