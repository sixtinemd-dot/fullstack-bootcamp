import RecipeItem from "../model/RecipeItem";

interface Props {
  recipes: RecipeItem[];
  onDelete: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

export default function RecipeTemplate({
  recipes,
  onDelete,
  onToggleFavorite
}: Props) {
  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id} className="recipe-card">
          <h3>
            {recipe.title} {recipe.isFavorite && "⭐"}
          </h3>

          <button onClick={() => onToggleFavorite(recipe.id)}>
            {recipe.isFavorite ? "Unfavorite" : "Favorite"}
          </button>

          <button onClick={() => onDelete(recipe.id)}>
            Delete
          </button>

          <details>
            <summary>View Details</summary>

            <h4>Ingredients</h4>
            <ul>
              {recipe.ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>

            <h4>Instructions</h4>
            <p>{recipe.instructions}</p>
          </details>
        </div>
      ))}
    </div>
  );
}
