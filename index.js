// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  let result;
  if (someValue > 42) {
  result = someValue - 42;
  return result;
} else {
  result = 42 - someValue;
  return result;
}
}


function distanceFromHqInFeet (someValue) {
    return distanceFromHqInBlocks (someValue) * 264;
}

function distanceTravelledInFeet (startBlock, endBlock) {
  if (startBlock < endBlock) {
    let result;
    result = (endBlock - startBlock) * 264;
      return result;
  } else {
    result = (startBlock - endBlock) * 264;
    return result;
  }
}

function calculatesFarePrice(startBlock, endBlock) {

  let result = distanceTravelledInFeet(startBlock, endBlock)
  let fare;
  if (result < 400) {
      fare = 0;
      return fare;
  }
  else if (result > 400 && result <= 2000) {
      fare = .02 * (result - 400);
      return fare;
  }

  else if (result > 2000 && result <= 2500) {
      fare = 25;
      return fare;
  }

  else if (result > 2500) {
      fare = 'cannot travel that far';
      return fare;
  }


}
