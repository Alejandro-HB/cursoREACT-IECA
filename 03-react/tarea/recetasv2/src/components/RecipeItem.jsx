const RecipeItem=({recipe})=>{
    //console.log(props);
    const {name, ingredients, time}=recipe;
    return (
        <div className={`p-4 bg-slate-200 rounded-xl w-[150px] ${recipe.time<500 ? "bg-yellow-500":"bg-slate-200"}`}>
            <h2>{name}</h2>
            <br/>
            <p>{ingredients}</p>
            <br/>
            <p>{time} minutos</p>            
        </div>
    );
}

export default RecipeItem;