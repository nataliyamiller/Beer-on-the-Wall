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

var oneBeerLeft = function() {
  return ("Only 1 bottle of beer on the wall, only 1 bottle of beer." +
  " Take this last one down and pass it around, no more bottles of beer on the wall, no more bottles of beer." +
  "  Go to the store and buy some more, no more bottles of beer on the wall.");
}


$(function() {
  $("form#bottles").submit(function(event) {
    var userInput = parseInt($("input#user-input").val());
    var bottles = hasBeer(userInput);
    var hasBottles = beerOnTheWall(userInput);
    var oneBottleLeft = oneBeerLeft();
    if(!bottles) {
      $("#result-1").show();
      $("#result-2").hide();
    } else if (bottles){
      $("#result-1").hide();
      $("#result-2").show();
      $("p").empty();
      var number = hasBottles.length;

      for (var i = 0; i < number - 1 ; i++) {
        var $new = $("<h5>" + hasBottles[i] + " bottles of beer on the wall, " + hasBottles[i] +
        " bottles of beer. Take one down and pass it around, " + hasBottles[i+1] + " bottles of beer on the wall.</h5>").hide();
        $("p.many-bottles").append($new);
        $new.slideDown(1200);
      }

      $("p.one-bottle").append("<p>" + oneBottleLeft + "</p>");
      function blinker() {
        $('.one-bottle').fadeOut(500).fadeIn(500);
      }
      setInterval(blinker, 1000);
      }

    event.preventDefault();
  });
});
