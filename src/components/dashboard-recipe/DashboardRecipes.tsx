import { useGetMyRecipesQuery } from '../../store/slices/recipeApiSlice'
import Loader from '../loader/Loader'
import DashboardRecipe from './DashboardRecipe'
import './dashboardRecipes.css'

const DashboardRecipes = () => {
  const { data: recipes, isLoading, isError } = useGetMyRecipesQuery()  

  return (
    <div className='dashboard__recipes'>
        {
          isLoading ? (
            <Loader />
          ) : isError || !recipes ? (
            <h1>
              Error al cargar las recetas
            </h1>
          ) : (
            recipes?.data.map(recipe => (
              <DashboardRecipe recipe={recipe} />
          ))
          )
        }
    </div>
  )
}

export default DashboardRecipes