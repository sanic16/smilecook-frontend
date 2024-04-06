import { FaClock, FaListUl, FaThumbsUp } from "react-icons/fa"
import './dashboardRecipe.css'
import { useDeleteRecipeMutation } from "../../store/slices/recipeApiSlice"
import { toast } from "react-toastify"

const DashboardRecipe = (
  {
    recipe
  }:{
    recipe: Recipe
  }
) => {
  const [deleteRecipe, {isLoading: loadingDelete}] = useDeleteRecipeMutation()
  const handleDelete = async () => {
    try {
      await deleteRecipe({id: recipe.id}).unwrap()
      toast.success('Receta eliminada')
    } catch (error) {
      toast.error('Error al eliminar la receta')
    }
  }
  return (
    <div className="dashboard__recipe">
      <div className="dashboard__recipe-left">
        <div className="dashboard__recipe-cover">
            <img src={recipe.cover_image} alt={recipe.name} />
        </div>
        <div className="dashboard__recipe-info">
            <h3>
                { recipe.name }
            </h3>
            <div className="dashboard__recipe-info-items">
                <small>
                    <FaListUl /> { recipe.ingredients.length }
                </small>
                <small>
                    <FaClock /> { recipe.cook_time }
                </small>
                <small>
                    <FaThumbsUp /> { recipe.popularity }
                </small>
            </div>
        </div>
      </div>
      <div className="dashboard__recipe-right">
        <div className="dashboard__recipe-actions">
            <button className="btn">
              ver
            </button>
            <button 
              className="btn info"
             
            >
              editar
            </button>
            <button 
              className={`btn danger ${loadingDelete ? 'disabled' : ''}`}
              onClick={handleDelete}
              disabled={loadingDelete}
            >
              eliminar
            </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardRecipe