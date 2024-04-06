import Recipes from "../../components/recipes/Recipes"
import { useGetRecipesQuery } from "../../store/slices/recipeApiSlice"

const Home = () => {
  const { data } = useGetRecipesQuery()
  return (
    <section>
      <div className="container">
        {
          data && <Recipes recipes={data.data} />
        }
      </div>
    </section>
  )
}

export default Home