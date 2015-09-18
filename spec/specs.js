describe('hasBeer', function() {
  it("is false if there is no more beer on the wall", function() {
    expect(hasBeer(0)).to.equal(false);
  });

  it("is true if there is beer on the wall", function() {
    expect(hasBeer(99)).to.equal(true);
  });
});

describe('beerOnTheWall', function() {
  it("returns array of bottles in descending order", function() {
    expect(beerOnTheWall(5)).to.eql([5, 4, 3, 2, 1]);
  });
});
