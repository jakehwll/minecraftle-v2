export enum MatchMapResult {
  DEFAULT = "Default",
  CORRECT = "Correct",
  WRONG = "Wrong",
  ORANGE = "Orange",
  UNUSED = "Unused",
}

export type MatchMap = Array<Array<MatchMapResult>>;
export type Table = Array<Array<string | null>>;

const deepTableComparison = ({
  recipe,
  input,
}: {
  recipe: Table;
  input: Table;
}): {
  matchMap: MatchMap;
  matchCount: number;
  isMatch: boolean;
} => {
  // Instantiate an empty matchmap with default values
  let matchMap: MatchMap = Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => MatchMapResult.DEFAULT)
  );

  // Get the size of the recipe, this varies between 1x1 and 3x3.
  const VERTICAL_SIZE = recipe.length;
  const HORIZONTAL_SIZE = Math.max(...recipe.map((row) => row.length));

  // By default, the recipe and input are considered a match
  // If any item does not match, this will be set to false
  let isMatch = true;

  // Iterate over the recipe and input arrays
  // If the item in the recipe and isn't air, set to default.
  // If the item in the recipe and input match, set to correct.
  // Known caveats: This doesn't account for items in the wrong slot.
  // This is handled in the matchMapWithWrongSlots function.
  for (let i = 0; i < VERTICAL_SIZE; i++) {
    for (let j = 0; j < HORIZONTAL_SIZE; j++) {
      if (recipe[i][j] === input[i][j]) {
        if (recipe[i][j] === null) {
          // If the item is air.
          matchMap[i][j] = MatchMapResult.DEFAULT;
        } else {
          // If the match is correct and an item.
          matchMap[i][j] = MatchMapResult.CORRECT;
        }
      } else {
        // Our recipe and input don't match.
        isMatch = false;
      }
    }
  }

  // Count the number of correct matches.
  const matchCount = matchMap
    .flat()
    .filter((match) => match === MatchMapResult.CORRECT).length;

  return {
    matchMap,
    matchCount,
    isMatch,
  };
};

const generateVariations = ({ recipe }: { recipe: Table }): Table[] => {
  const VERTICAL_SIZE = recipe.length;
  const HORIZONTAL_SIZE = Math.max(...recipe.map((row) => row.length));

  // We want to generate all possible variations of the recipe.
  // As if we were moving the recipe around the crafting table.
  // This is done by creating a new array of arrays with the new recipe.
  return Array.from({ length: 4 - VERTICAL_SIZE }, (_, i) =>
    Array.from({ length: 4 - HORIZONTAL_SIZE }, (_, j) => {
      let currentVariant: Table = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ];

      new Array(VERTICAL_SIZE).fill(null).map((_, k) =>
        new Array(HORIZONTAL_SIZE).fill(null).map((_, l) => {
          currentVariant[i + k][j + l] = recipe[k][l];
        })
      );

      return currentVariant;
    })
  ).flat();
};

const generateVariationWithReflections = ({
  solution,
}: {
  solution: Table;
}): Table[] => {
  // Minecraft crafting tables have a reflection symmetry.
  // This means that the recipe can be flipped horizontally.
  // This is a helper function to generate all possible variations of the recipe.
  // Including the reflection symmetry.

  let variants = generateVariations({
    recipe: solution,
  });

  const reversedSolution = solution.map((row) => [...row].reverse());

  return [
    ...variants,
    ...generateVariations({
      recipe: reversedSolution,
    }),
  ];
};

const matchMapWithWrongSlots = ({
  recipe,
  input,
  correctSlots,
}: {
  recipe: Table;
  input: Table;
  correctSlots: MatchMap;
}) => {
  let n_items: { [key: string]: number } = {};

  // first pass initiliases all item dict entries to 0
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (input[i][j] === null || input[i][j] === undefined) {
        continue;
      }

      if (n_items[input[i][j]!] === undefined) {
        n_items[input[i][j]!] = 0;
      }
    }
  }

  // Second pass counts how many of each item are correct
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (input[i][j] === null || input[i][j] === undefined) {
        continue;
      }

      if (correctSlots[i][j] === MatchMapResult.CORRECT) {
        n_items[input[i][j]!]++;
      }
    }
  }

  // finds how many of each item are left to be identified
  let n_unidentified_items = recipe.reduce(
    (acc: { [key: string]: number }, row) => {
      row.forEach((item) => {
        if (item !== null && item !== undefined) {
          if (acc[item] === undefined) {
            acc[item] = 1;
          } else {
            acc[item]++;
          }
        }
      });
      return acc;
    },
    {}
  );
  for (let name of Object.keys(n_unidentified_items)) {
    n_unidentified_items[name] -= n_items[name];
  }

  // final pass marks (at most n) orange slots for each item in n_unidentified_items
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (input[i][j] === null || input[i][j] === undefined) {
        continue;
      }

      if (
        correctSlots[i][j] !== MatchMapResult.CORRECT &&
        n_unidentified_items[input[i][j]!] > 0
      ) {
        correctSlots[i][j] = MatchMapResult.ORANGE;
        n_unidentified_items[input[i][j]!]--;
      }
    }
  }

  return correctSlots;
};

export const checkRecipe = ({
  recipe,
  input,
}: {
  recipe: Table;
  input: Table;
}): boolean => {
  // This function checks if the input matches the recipe.
  // It does this by generating all possible variations of the recipe.
  // And then returning true if any of the variations match the input.

  const allRecipeVariants = generateVariationWithReflections({
    solution: recipe,
  });

  return allRecipeVariants.some(
    (variant) =>
      deepTableComparison({
        recipe: variant,
        input,
      }).isMatch
  );
};

export const checkMatchMap = ({
  recipe,
  input,
}: {
  recipe: Table;
  input: Table;
}): MatchMap => {
  // This looks a tad crazy but it's just a way to find the best match
  // out of all the possible variations of the recipe.

  // What were doing here is basically..
  // 1. Find all possible variations of the recipe.
  // 2. Find all matches out of all the variations.
  // 3. Sort it by the match count so we can get the best match.
  // 4. Grab the best match by grabbing the first element of the sorted array.
  const bestMatch = generateVariationWithReflections({
    solution: recipe,
  })
    .map((variant) =>
      deepTableComparison({
        recipe: variant,
        input,
      })
    )
    .sort((a, b) => b.matchCount - a.matchCount)[0];

  // Finally we return the match map with the wrong slots marked.
  return matchMapWithWrongSlots({
    recipe,
    input: input,
    correctSlots: bestMatch.matchMap,
  });
};
