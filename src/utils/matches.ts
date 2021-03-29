import {levenshteinLimit, MatchesFuncs, phrases} from "../const";

export const matches: MatchesFuncs = Object.entries(phrases).reduce(
  (sum, [id, phrase]) => {
    const simplifiedPhrase = phrase.simplify();
    sum[id as keyof typeof phrases] = (string: string) =>
      string.simplify().levenshtein(simplifiedPhrase) < levenshteinLimit; //todo
    return sum;
  },
  {} as MatchesFuncs
);