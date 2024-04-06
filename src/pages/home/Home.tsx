import Loader from "../../components/loader/Loader"
import Recipes from "../../components/recipes/Recipes"
import { useGetRecipesQuery } from "../../store/slices/recipeApiSlice"
import './home.css'

const Home = () => {
  const { data, isLoading, isError } = useGetRecipesQuery()
  return (
    <section className="home">
      <div className="container home__container">
        {
          isLoading ? (
            <Loader />
          ) : isError || !data ? (
            <h1>
              Error al cargar las recetas
            </h1>
          ) : (            
            <Recipes recipes={data.data} />            
          )
        }
      </div>
    </section>
  )
}

export default Home