import { type MatchMap, MatchMapResult } from "./recipe";

export const matchMapToEmoji = ({ matchMap }: { matchMap: MatchMap }) => {
  return matchMap.map((row) =>
    row.map(({ result }) => {
      switch (true) {
        case result === MatchMapResult.DEFAULT:
        case result === MatchMapResult.WRONG:
          return "⬛";
        case result === MatchMapResult.ORANGE:
          return "🟨";
        case result === MatchMapResult.CORRECT:
          return "🟩";
        default:
          break;
      }
    }).flat().join("")
  ).join('\n');
};
