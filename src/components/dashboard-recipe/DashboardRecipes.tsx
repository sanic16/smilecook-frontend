import { useGetMyRecipesQuery } from '../../store/slices/recipeApiSlice'
import DashboardRecipe from './DashboardRecipe'
import './dashboardRecipes.css'

const DashboardRecipes = () => {
  const { data: recipes } = useGetMyRecipesQuery()  

  return (
    <div className='dashboard__recipes'>
        {
            recipes?.data.map(recipe => (
                <DashboardRecipe recipe={recipe} />
            ))
        }
    </div>
  )
}

export default DashboardRecipes