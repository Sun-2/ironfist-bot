const regex = /[^A-Za-z0-9]/g.compile();

const chars = {
  ł: "l",
  ń: "n",
  ź: "z",
  ż: "z",
  ą: "a",
  ę: "e",
  ś: "s",
  ó: "o"
} as const;

String.prototype.simplify = function(this: string) {
  const withoutPolishChars = Object.entries(chars).reduce(
    (sum, [from, to]) => sum.replace(new RegExp(from, "g"), to),
    this
  );

  return withoutPolishChars.replace(regex, "");
};

declare global {
  interface String {
    simplify(this: string): string;
  }
}

export {};
