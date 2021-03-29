describe("Simplify", function() {
  it("should simplify #1", function() {
    const string = "A jak Pan Jezus powiedział?";
    expect(string.simplify()).toEqual("ajakpanjezuspowiedzial");
  });
});
