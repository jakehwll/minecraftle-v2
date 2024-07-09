export const checkRecipe = (
  recipe: Array<Array<string | null>>,
  craftingTable: Array<Array<string | null>>
) => {
  const recipeHeight = recipe.length;
  const recipeWidth = Math.max(...recipe.map((v) => v.length));

  const TABLE_DIMENSIONS = 3;

  for (let startY = 0; startY <= TABLE_DIMENSIONS - recipeHeight; startY++) {
    for (let startX = 0; startX <= TABLE_DIMENSIONS - recipeWidth; startX++) {
      let match = true;

      // Check every position in the crafting table
      for (let y = 0; y < TABLE_DIMENSIONS; y++) {
        for (let x = 0; x < TABLE_DIMENSIONS; x++) {
          const recipeItem =
            y >= startY &&
            y < startY + recipeHeight &&
            x >= startX &&
            x < startX + recipeWidth
              ? recipe[y - startY][x - startX]
              : null; // Determine if we're within the bounds of the recipe

          if (craftingTable[y][x] !== recipeItem) {
            match = false;
            break;
          }
        }
        if (!match) break;
      }

      if (match) return true;
    }
  }

  return false;
};