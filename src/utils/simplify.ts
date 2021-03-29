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
  const lowercase = this.toLowerCase();
  const withoutPolishChars = Object.entries(chars).reduce(
    (sum, [from, to]) => sum.replace(new RegExp(from, "gi"), to),
    lowercase
  );

  return withoutPolishChars.replace(/[^A-Za-z0-9]/gi, "");
};

declare global {
  interface String {
    simplify(this: string): string;
  }
}

export {};
