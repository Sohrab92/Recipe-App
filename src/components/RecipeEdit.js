import React from "react";
import RecipeEditIngredient from "./RecipeEditIngredient";

export default function RecipeEdit() {
  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-btn-container">
        <button className="btn recipe-edit__remove-btn">&times;</button>
      </div>
      <div className="recipe-edit__details-grid">
        <label htmlFor="name" className="recipe-edit__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="recipe-edit__input"
        />
        <label htmlFor="cook-time" className="recipe-edit__label">
          Cook Time
        </label>
        <input
          type="text"
          name="cook-time"
          id="cook-time"
          className="recipe-edit__input"
        />
        <label htmlFor="servings" className="recipe-edit__label">
          Servings
        </label>
        <input
          type="number"
          min="1"
          name="servings"
          id="servings"
          className="recipe-edit__input"
        />
        <label htmlFor="instructions" className="recipe-edit__label">
          Instructions
        </label>
        <textarea
          name="instructions"
          id="instructions"
          className="recipe-edit__input"
        />
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredients-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        <RecipeEditIngredient />
        <RecipeEditIngredient />
      </div>
      <div className="recipe-edit__add-ingredients-btn-container">
        <button className="btn btn--primary">Add Ingredients</button>
      </div>
    </div>
  );
}
