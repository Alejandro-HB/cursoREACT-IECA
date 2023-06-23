const RecipeItem=({recipe})=>{
    //console.log(recipe);
    const {name, ingredients, time}=recipe;
    return (
        <div className={`p-4 bg-yellow-500 rounded-xl w-[150px]`}>
            <h2>{name}</h2>
            <br/>
            <p>{ingredients}</p>
            <br/>
            <p>{time} minutos</p> 
            <br />          
        </div>
    );
}

export default RecipeItem;