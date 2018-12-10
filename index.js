// Code your solution in this file!
function distanceFromHqInBlocks(pickUp) {
  if (pickUp < 42) {
    return 42 - pickUp
  } else{
    return pickUp - 42
  }
}

function distanceFromHqInFeet(pickUp) {
  return distanceFromHqInBlocks(pickUp) * 264
}

function distanceTravelledInFeet(pickUp, dropOff) {
  let distance = (pickUp - dropOff) *264
  return Math.abs(distance)
}

function calculatesFarePrice(pickUp, dropOff) {
  let distance = distanceTravelledInFeet(pickUp, dropOff)
  let fare
  if (distance <400) {
    fare = 0;
  } else if (distance >= 400 && distance <=2000 ){
    fare = (distance - 400) * 0.02
  } else if (distance > 2000 && distance < 2500) {
    fare = 25
  } else if (distance > 2500){
    fare = 'cannot travel that far'
  }
  return fare
}
