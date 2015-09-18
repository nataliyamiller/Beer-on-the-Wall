var hasBeer = function(numberOfBottles) {
   if (numberOfBottles > 0) {
     return true;
   } else {
     return false;
   }
}

var beerOnTheWall = function(numberOfBottles) {
  var bottlesArray = [];
  while(hasBeer(numberOfBottles)) {
    bottlesArray.push(numberOfBottles);
    numberOfBottles -= 1;
  }
  return bottlesArray;
}
