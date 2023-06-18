import { useEffect, useState } from "react";
import RecipeForm from "./RecipeForm";
import RecipeItem from "./RecipeItem";

const RecipeList = () => {
  const [productCount, setProductCount] = useState(0);
  const [recipes, setProducts] = useState([
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

  const addProduct = (recipe) => {
    setProducts([...recipes, recipe]);
  };

  useEffect(()=>{
    setProductCount(recipes.length)
  }, [recipes])

  return (
    <>
      <h1> Mi lista de productos ({productCount} Productos)</h1>
      <RecipeForm onSubmit={addProduct} />
      <ul className='flex gap-4 py-4'>
        {recipes.map((recipe) => (
          <li>
            <RecipeItem product={recipe} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RecipeList;