import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  const addRecipe = (recipe) => {
    setRecipes(current => [...current, recipe]);
  };

  const handleDelete = (name) => {
    setRecipes((current) => {
      return current.filter((item) => item.name !== name);
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList items={recipes} onDelete={handleDelete} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
