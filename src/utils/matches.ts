import { phrases } from "../const";

export type MatchesFuncs = Record<
  keyof typeof phrases,
  (string: string) => boolean
>;

export const matches: MatchesFuncs = Object.entries(phrases).reduce(
  (sum, [id, phrase]) => {
    const simplifiedPhrase = phrase.simplify();
    sum[id as keyof typeof phrases] = (string: string, limit = 4) =>
      string.simplify().levenshtein(simplifiedPhrase) < limit; //todo
    return sum;
  },
  {} as MatchesFuncs
);
