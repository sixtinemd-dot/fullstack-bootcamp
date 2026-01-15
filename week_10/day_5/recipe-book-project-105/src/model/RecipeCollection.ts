import RecipeItem from "./RecipeItem";

export default class RecipeCollection {
  private storageKey = "recipes";

  load(): RecipeItem[] {
    const data = localStorage.getItem(this.storageKey);
    if (!data) return [];

    return JSON.parse(data).map(
      (r: RecipeItem) =>
        new RecipeItem(
          r.id,
          r.title,
          r.ingredients,
          r.instructions,
          r.isFavorite
        )
    );
  }

  save(recipes: RecipeItem[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(recipes));
  }
}
