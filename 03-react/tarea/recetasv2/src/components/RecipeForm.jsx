const RecipeForm = ({ onSubmit }) => {
    const submit = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form[0].value;
      const ingredients = form[1].value;
      const time = form[2].value;
      const product = { name, ingredients, time };
      onSubmit(product);
      form.reset();
    };
  
    return (
      <form onSubmit={submit}>
        <input className="shadow appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Nombre" />
        <input className="shadow appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Ingredientes" />
        <input className="shadow appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Tiempo (min)" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Agregar</button>
      </form>
    );
  };
  
  export default RecipeForm;