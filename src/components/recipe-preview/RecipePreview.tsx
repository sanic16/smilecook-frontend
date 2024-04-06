import { useState } from "react"
import defaultCover from '../../assets/default_cover.jpg'
import { FaClock, FaListUl } from "react-icons/fa"

const RecipePreview = (
    {
        name,
        description,
        num_of_servings,
        cook_time,
        directions,
        ingredients,
        onChangeCover
    }:{
        name: string,
        description: string,
        num_of_servings: number,
        cook_time: number 
        directions: string[]
        ingredients: string[],
        onChangeCover: (file: File) => void
    }
) => {
    const [cover, setCover] = useState<File | null>(null)
    const [coverUrl, setCoverUrl] = useState(defaultCover)

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files
        if(file){
            setCover(file[0])
            setCoverUrl(URL.createObjectURL(file[0]))
            if(cover && onChangeCover){
                onChangeCover(cover)
            }
        }
    }

  return (
    <div className="recipe__preview">
        <div className="recipe__cover-container">
            <label 
                htmlFor="recipeCover"
            >
                <div className="recipe__cover">
                    <img 
                        src={coverUrl} 
                        alt="Avatar" 
                    />
                </div>
            </label>
            <form>
                
                <input 
                    type="file" 
                    id="recipeCover"
                    onChange={handleAvatarChange}
                />
                <label
                    htmlFor="recipeCover"
                    className="btn"
                >
                    Seleccionar Cover
                </label>
            </form>
        </div>
        <div className="recipe__preview-body">
            <h3>
                { name }
            </h3>
            <p>
                { description }
            </p>
            <h4>
                Instrucciones
            </h4>
            <ul>
                { directions.map((direction, key) => (
                    <li key={key}>
                        { direction }
                    </li>
                ))}
            </ul>
            <h4>
                Ingredientes
            </h4>
            <ul>
                { ingredients.map((ingredient, key) => (
                    <li key={key}>
                        { ingredient }
                    </li>
                ))}
            </ul>
            <div 
                className="recipe__preview-footer"
            >
                <small>
                    <FaListUl /> { num_of_servings }
                </small>
                <small>
                    <FaClock />{ cook_time}
                </small>
            </div>
        </div>
    </div>
  )
}

export default RecipePreview