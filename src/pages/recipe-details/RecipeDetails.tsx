import { useParams } from "react-router-dom"
import { useGetRecipeQuery } from "../../store/slices/recipeApiSlice"
import './recipeDetails.css'
import { FaClock, FaListUl, FaThumbsUp, FaUsers } from "react-icons/fa"
import Loader from "../../components/loader/Loader"
const RecipeDetails = () => {
  const { id } = useParams<{id: string}>()

  const { data: recipe, isLoading, isError } = useGetRecipeQuery({id: parseInt(id!)})  
    
  return (
    <section className="recipe__details">
        <div className="container">
            {
                isLoading ? (
                    <Loader />
                ) :  isError || !recipe ? (
                    <h1>
                        Error al Cargar la Receta
                    </h1>
                ) : (
                    <div className="recipe__details-container">
                            <h1>
                                { recipe?.name }
                            </h1>
                        <div className="recipe__details-content">
                                <div className="recipe__details-left">
                                    <h3>
                                        Descripción
                                    </h3>
                                    <p>
                                        {recipe?.description}
                                    </p>
                                    <h3>
                                        Ingredientes
                                    </h3>
                                    <ol>
                                        {
                                            recipe?.ingredients.map(ingredient => (
                                                <li>
                                                    {ingredient}
                                                </li>
                                            ))
                                        }
                                    </ol>
                                    <h3>
                                        Preparación
                                    </h3>
                                    <ol>
                                        {
                                            recipe?.directions.map(direction => (
                                                <li>
                                                    {direction}
                                                </li>
                                            ))
                                        }
                                    </ol>
                                </div>
                                <div className="recipe__details-right">
                                    <div className="recipe__details-cover">
                                        <img src={recipe?.cover_image} alt={recipe?.name} />
                                    </div>
                                    <div className="recipe__details-info">
                                        <div>
                                            <p>
                                                <FaClock /> {recipe?.cook_time}
                                            </p>
                                            <p>
                                                <FaUsers /> {recipe?.num_of_servings}
                                            </p>
                                            <p>
                                                <FaListUl /> {recipe?.ingredients.length}
                                            </p> 
                                            <p>
                                                <FaThumbsUp /> {recipe?.popularity}
                                            </p>     
                                        </div>                      
                                        <p>
                                            Receta Realizada por: {recipe?.author.username}
                                        </p>
                                        <p>
                                            Creada el: {new Date(recipe?.created_at).toDateString()}
                                            
                                        </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                )
            }
        </div>
    </section>
  )
}

export default RecipeDetails