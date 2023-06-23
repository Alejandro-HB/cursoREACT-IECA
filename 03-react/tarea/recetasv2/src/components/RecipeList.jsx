import { useEffect, useState } from "react";
import RecipeForm from "./RecipeForm.jsx";
import RecipeItem from "./RecipeItem.jsx";

const RecipeList = () => {
  const [recipeCount, setRecipeCount] = useState(0);
  const [recipes, setRecipes] = useState([
    {
      name: "Receta 1",
      ingredients: "Ingrediente 1, ingrediente 2, ingrediente 3",
      time: 1000,
    },
    {
      name: "Receta 2",
      ingredients: "Ingrediente 1, ingrediente 2, ingrediente 3",
      time: 250,
    },
    {
      name: "Receta 3",
      ingredients: "Ingrediente 1, ingrediente 2, ingrediente 3",
      time: 500,
    },
  ]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  useEffect(()=>{
    setRecipeCount(recipes.length)
  }, [recipes])

  return (
    <>
    <div className="content-center text-center">
      <div className="header">
        <h1> Mis recetas ({recipeCount} Recetas)</h1>
      </div>
      <RecipeForm onSubmit={addRecipe} />
      <div class="main-container">
        <ul className="flex gap-4 py-4">
          {recipes.map((recipe) => (
            <li>
              <RecipeItem recipe={recipe} />
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default RecipeList;