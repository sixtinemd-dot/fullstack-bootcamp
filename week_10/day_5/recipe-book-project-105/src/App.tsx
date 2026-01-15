
import './App.css'
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import RecipeItem from "./model/RecipeItem";
import RecipeCollection from "./model/RecipeCollection";
import RecipeTemplate from "./templates/RecipeTemplate";

export default function App() {
  const collection = new RecipeCollection();
  const [recipes, setRecipes] = useState<RecipeItem[]>([]);

  useEffect(() => {
    setRecipes(collection.load());
  }, []);

  useEffect(() => {
    collection.save(recipes);
  }, [recipes]);

  function addRecipe(
    title: string,
    ingredients: string[],
    instructions: string
  ) {
    setRecipes(prev => [
      ...prev,
      new RecipeItem(uuidv4(), title, ingredients, instructions)
    ]);
  }

  function deleteRecipe(id: string) {
    setRecipes(prev => prev.filter(r => r.id !== id));
  }

  function toggleFavorite(id: string) {
    setRecipes(prev =>
      prev.map(r =>
        r.id === id ? { ...r, isFavorite: !r.isFavorite } : r
      )
    );
  }

  return (
    <div className="recipe-app">
      <h1>Recipe Book</h1>

      <form
        onSubmit={e => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const formData = new FormData(form);

          addRecipe(
            formData.get("title") as string,
            (formData.get("ingredients") as string).split("\n"),
            formData.get("instructions") as string
          );

          form.reset();
        }}
      >
        <input name="title" placeholder="Recipe Title" required /><br></br><br></br>
        <textarea name="ingredients" placeholder="Ingredients" required /><br></br>
        <textarea name="instructions" placeholder="Instructions" required /><br></br>
        <button type="submit">Add Recipe</button><br></br><br></br>
      </form>

      <RecipeTemplate
        recipes={recipes}
        onDelete={deleteRecipe}
        onToggleFavorite={toggleFavorite}
      />

      <button onClick={() => setRecipes([])}>
        Clear All Recipes
      </button>
    </div>
  );
}
