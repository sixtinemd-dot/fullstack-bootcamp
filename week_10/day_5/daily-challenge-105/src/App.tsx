// src/App.tsx

import { Provider } from "react-redux";
import { store } from "./store";
import DataFetcher from "./components/DataFetcher";
import { fetchRecipes } from "./features/dataSlice";
import type { Recipe } from "./types/types";

function AppContent() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Recipes</h1>

      <DataFetcher<Recipe>
  fetchAction={fetchRecipes}
  selector={state => state.data}
  renderItem={recipe => (
    <div
      style={{
        border: "1px solid #ccc",
        marginBottom: "1rem",
        padding: "1rem",
      }}
    >
      <h3>{recipe.name}</h3>
      <img src={recipe.image} width={150} />

      <h4>Ingredients:</h4>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  )}
/>

    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
