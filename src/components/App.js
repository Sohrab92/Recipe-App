import React, { useState, useEffect } from "react";
import RecipesList from "./RecipesList";
import "../css/app.css";

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "recipeApp.recipes";

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);
  const recipeContextValue = { addRecipe, deleteRecipe };

  useEffect(() => {
    const recipesJSON = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (recipesJSON) setRecipes(recipesJSON);
  }, []);

  useEffect(
    () => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes)),
    [recipes]
  );

  function addRecipe() {
    const newRecipe = {
      id: Math.floor(Math.random() * 1000000) + 1,
      name: "New",
      cookingTime: "1:00",
      servings: 1,
      instructions: "Instr.",
      ingredients: [
        {
          id: Math.floor(Math.random() * 1000000) + 1,
          name: "Name",
          amount: "1 Tbs",
        },
      ],
    };

    setRecipes([...recipes, newRecipe]);
  }

  function deleteRecipe(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipesList recipes={recipes} />
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    cookingTime: "1:45",
    servings: 3,
    instructions:
      "1. Put salt on the chicken\n2. Put the chicken in the oven\n3. Eat the chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbs",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    cookingTime: "0:45",
    servings: 5,
    instructions:
      "1. Put paprika on the pork\n2. Put the pork in the oven\n3. Eat the pork",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "3 Pounds",
      },
      {
        id: 2,
        name: "Paprika",
        amount: "2 Tbs",
      },
    ],
  },
];

export default App;
