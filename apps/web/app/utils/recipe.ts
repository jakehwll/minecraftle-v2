export enum MatchMapResult {
  NULL = "null",
  GOOD = "correct",
  NEARLY = "orange",
  BAD = "bad",
  UNUSED = "unused",
}

export type MatchMap = Array<
  Array<{
    item: string | null;
    result: MatchMapResult;
  }>
>;
export type Table = (string | null)[][];

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
  const VERTICAL_SIZE = recipe.length;
  const HORIZONTAL_SIZE = Math.max(...recipe.map((row) => row.length));

  let isMatch = true;
  const matchMap: MatchMap = Array.from({ length: VERTICAL_SIZE }, (_, y) =>
    Array.from({ length: HORIZONTAL_SIZE }, (_, x) => {
      const recipeItem = recipe[y]?.[x] ?? null;
      const inputItem = input[y]?.[x] ?? null;

      const result =
        recipeItem === inputItem
          ? recipeItem === null
            ? MatchMapResult.NULL
            : MatchMapResult.GOOD
          : MatchMapResult.NULL;

      isMatch &&= recipeItem === inputItem;

      return {
        item: inputItem,
        result,
      };
    })
  );

  const matchCount = matchMap
    .flat()
    .filter((match) => match.result === MatchMapResult.GOOD).length;

  return {
    matchMap,
    matchCount,
    isMatch,
  };
};

const generateVariationWithReflections = ({
  solution,
}: {
  solution: Table;
}): Table[] => {
  const generateVariations = ({ recipe }: { recipe: Table }): Table[] => {
    const VERTICAL_SIZE = recipe.length;
    const HORIZONTAL_SIZE = Math.max(...recipe.map((row) => row.length));

    // We want to generate all possible variations of the recipe.
    // As if we were moving the recipe around the crafting table.
    // This is done by creating a new array of arrays with the new recipe.
    return Array.from({ length: 4 - VERTICAL_SIZE }, (_, i) =>
      Array.from({ length: 4 - HORIZONTAL_SIZE }, (_, j) => {
        const currentVariant: Table = [
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

  return [
    ...generateVariations({
      recipe: solution,
    }),
    ...generateVariations({
      recipe: solution.map((row) => [...row].reverse()),
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
  const n_items: { [key: string]: number } = {};

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

      if (correctSlots[i][j].result === MatchMapResult.GOOD) {
        n_items[input[i][j]!]++;
      }
    }
  }

  // finds how many of each item are left to be identified
  const n_unidentified_items = recipe.reduce(
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
  for (const name of Object.keys(n_unidentified_items)) {
    n_unidentified_items[name] -= n_items[name];
  }

  // final pass marks (at most n) orange slots for each item in n_unidentified_items
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (input[i][j] === null || input[i][j] === undefined) {
        continue;
      }

      if (
        correctSlots[i][j].result !== MatchMapResult.GOOD &&
        n_unidentified_items[input[i][j]!] > 0
      ) {
        correctSlots[i][j].result = MatchMapResult.NEARLY;
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
