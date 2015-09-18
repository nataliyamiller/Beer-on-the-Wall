describe('hasBeer', function() {
  it("is false if there is no more beer on the wall", function() {
    expect(hasBeer()).to.equal(false);
  });
});
