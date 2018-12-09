// Code your solution in this file!


function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42;
  } else {
    return 42 - block;
  }
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, destination) {
  let distance = (destination - start) * 264;
   result = Math.abs(distance);
   return result;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  let price
  if (distance < 400) {
    price = 0;
  } else if (distance > 2500) {
    price = "cannot travel that far";
  } else if (distance > 400 && distance < 2000) {
    price = 0.02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    price = 25;
  }
  return price
}
