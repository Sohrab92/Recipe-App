import React, { useContext } from "react";
import Recipe from "./Recipe";
import { RecipeContext } from "./App";

export default function RecipesList({ recipes }) {
  const { addRecipe } = useContext(RecipeContext);

  const recipeElements = recipes.map((recipe) => {
    return <Recipe key={recipe.id} {...recipe} />;
  });

  return (
    <div className="recipe-list">
      <div>{recipeElements}</div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary" onClick={addRecipe}>
          Add Recipe
        </button>
      </div>
    </div>
  );
}
