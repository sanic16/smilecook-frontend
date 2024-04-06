import { FaClock, FaListUl } from 'react-icons/fa'
import Card from '../card/Card'
import './recipe.css'
import { Link } from 'react-router-dom'

const Recipe = (
    {
        recipe
    }:{
        recipe: Recipe
    }
) => {
  return (
    <Card className='recipe'>
        
            <div className='recipe__header'>
                <div className="recipe__cover">
                    <img src={recipe.cover_image} alt={recipe.name} />
                </div>
                <h4 className="recipe__name">
                    { recipe.name }
                </h4>
                <div className="recipe__desc">
                    { recipe.description }
                </div>
            </div>

                
               
            <div className='recipe__footer'> 
                 <Link 
                    to={`recipe/${recipe.id}`}
                    className='btn'
                >
                    Ver receta
                </Link>
                <div
                    className='recipe__footer-info'
                >
                    <div
                       className='recipe__footer-info-item' 
                    >
                        <small>
                            <FaListUl /> { recipe.ingredients.length } 
                        </small>
                        <small>
                            <FaClock /> { recipe.cook_time } minutos
                        </small>
                    </div>
                    <div
                        className='recipe__footer-author'
                    >
                        <small>
                            Creador por: { recipe.author.username } 
                        </small>
                        <small>
                            { new Date(recipe.created_at).toDateString() }
                        </small>
                    </div>
                </div>
            </div>
        
    </Card>
  )
}

export default Recipe