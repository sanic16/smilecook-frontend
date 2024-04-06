import Recipe from "../recipe/Recipe"
import './recipes.css'

const Recipes = (
    {
        recipes
    }:{
        recipes: Recipe[]
    }
) => {
  return (
    <div className="recipes">
        {
            recipes.map(recipe => (
                <Recipe key={recipe.id} recipe={recipe} />
            ))
        }
    </div>
  )
}

export default Recipes