import * as levenshtein from "fast-levenshtein";

String.prototype.levenshtein = function(this: string, string: string) {
  return levenshtein.get(this, string);
};

declare global {
  interface String {
    levenshtein(this: string, string: string): number;
  }
}

export {};
