import {matches} from "../matches";

describe('matches', function () {
  it('#1', function () {
    const str = "Giń kurw";
    expect(matches.ginKurwo(str)).toBe(true);
  });

  it('#2', function () {
    const str = "Giń kurwwwwww";
    expect(matches.ginKurwo(str)).toBe(false);
  });

  it('#2', function () {
    const str = "a jak pan jezus powiedziau";
    expect(matches.jakPanJezusPowiedzial(str)).toBe(true);
  });
});