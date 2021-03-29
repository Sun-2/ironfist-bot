export const levenshteinLimit = 4;

export const phrases = {
  ginKurwo: "Giń kurwo!",
  jakPanJezusPowiedzial: "A jak Pan Jezus powiedział?"
} as const;

export type MatchesFuncs = Record<
  keyof typeof phrases,
  (string: string) => boolean
>;
