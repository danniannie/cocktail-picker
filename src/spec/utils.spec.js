import sentence from "../utils/utils.js";

describe("testing sentence function", () => {
  it("returns when passed a constanent to start", () => {
    const actual = sentence("Mother's Ruin");
    const expected = "a Mother's Ruin";
    expect(actual).toBe(expected);
  });
  it("returns when passed a vowel to start", () => {
    const actual = sentence("Envy Cocktail");
    const expected = "an Envy Cocktail";
    expect(actual).toBe(expected);
  });
  it("returns when passed the to start", () => {
    const actual = sentence("The Retox");
    const expected = "The Retox";
    expect(actual).toBe(expected);
  });
  it("returns when passed the to start", () => {
    const actual = sentence("A Touch of Evil");
    const expected = "A Touch of Evil";
    expect(actual).toBe(expected);
  });
});
