describe('hasBeer', function() {
  it("is false if there is no beer on the wall", function() {
    expect(hasBeer(0)).to.equal(false);
  });

  it("is true if there is beer on the wall", function() {
    expect(hasBeer(99)).to.equal(true);
  });
});

describe('beerOnTheWall', function() {
  it("turns user's number of bottles into an array", function() {
    expect(beerOnTheWall(5)).to.be.instanceOf(Array);
  });

  it("returns array of numbers in descending order", function() {
    expect(beerOnTheWall(5)).to.eql([5, 4, 3, 2, 1]);
  });
});

describe('oneBeerLeft', function() {
  it("returns a warning message that no more beer is left after passing around the last bottle", function() {
    expect(oneBeerLeft()).contains("Take this last one down and pass it around, no more bottles of beer on the wall");
  })
})
