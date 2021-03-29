//todo
describe("Levenshtein", function() {
  it("#1", function() {
    const a = "A jak Pan Jezus Powiedział?";
    const b = "jakpanjezuspowiedzial?";

    expect(a.simplify().levenshtein(b.simplify())).toBe(1);
  });
});
