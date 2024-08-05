import { MatchMap, MatchMapResult } from "./recipe";

export const matchMapToEmoji = ({ matchMap }: { matchMap: MatchMap }) => {
  return matchMap.map((row) =>
    row.map(({ result }) => {
      switch (true) {
        case result === MatchMapResult.NULL:
        case result === MatchMapResult.BAD:
          return "⬛";
        case result === MatchMapResult.NEARLY:
          return "🟨";
        case result === MatchMapResult.GOOD:
          return "🟩";
        default:
          break;
      }
    }).flat().join("")
  ).join('\n');
};
