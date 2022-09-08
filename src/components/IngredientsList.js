import React from "react";
import Ingredient from "./Ingredient";

export default function IngredientsList({ ingredients }) {
  const ingredientElements = ingredients.map((ingredient) => {
    return <Ingredient key={ingredient.id} {...ingredient} />;
  });

  return <div className="recipe__ingredients">{ingredientElements}</div>;
}
