import { MatchMap, MatchMapResult } from "./recipe";

export const matchMapToEmoji = ({ matchMap }: { matchMap: MatchMap }) => {
  return matchMap.map((row) =>
    row.map((cell) => {
      switch (true) {
        case cell === MatchMapResult.DEFAULT:
        case cell === MatchMapResult.WRONG:
          return "⬛";
        case cell === MatchMapResult.ORANGE:
          return "🟨";
        case cell === MatchMapResult.CORRECT:
          return "🟩";
        default:
          break;
      }
    }).flat().join("")
  ).join('\n');
};
