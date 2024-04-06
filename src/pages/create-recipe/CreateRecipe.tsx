import { useReducer, useState } from 'react'
import './createRecipe.css'
import RecipePreview from '../../components/recipe-preview/RecipePreview'
import ModalInput from '../../components/modal-input/ModalInput'
import { 
  useCreateRecipeMutation,
  useChangeAvatarMutation,
  useConfirmCoverChangeMutation,
  usePublishRecipeMutation
} from '../../store/slices/recipeApiSlice'
import { toast } from 'react-toastify'

const initialState: RecipeCreation = {
  name: '',
  description: '',
  num_of_servings: 0,
  cook_time: 0,
  directions: [],
  ingredients: []
}

const recipeReducer = (state: RecipeCreation, action: RecipeAction) => {
  switch(action.type){
    case 'name':
      return {
        ...state,
        name: action.payload
      }
    case 'description':
      return {
        ...state,
        description: action.payload
      }
    case 'num_of_servings':
      return {
        ...state,
        num_of_servings: action.payload
      }
    case 'cook_time':
      return {
        ...state,
        cook_time: action.payload
      }
    case 'directions':
      return {
        ...state,
        directions: action.payload
      }
    case 'ingredients':
      return {
        ...state,
        ingredients: action.payload
      }
    default:
      return state
  }
}

const CreateRecipe = () => {
  const [isOpenDirectionsModal, setIsOpenDirectionsModal] = useState(false)
  const [isOpenIngredientsModal, setIsOpenIngredientsModal] = useState(false)
  const [recipeData, dispatch] = useReducer(recipeReducer, initialState)
  const [coverFile, setCoverFile] = useState<File | null>(null)
  const [publishRecipe, setPublishRecipe] = useState<boolean>(false)
  const [loading, setLoading] = useState(false)

  const handleAddDirections = (value: string) => {
    dispatch({type: 'directions', payload: [...recipeData.directions, value]})
  }

  const handleAddIngredients = (value: string) => {
    dispatch({type: 'ingredients', payload: [...recipeData.ingredients, value]})
  }
  
  const [createRecipe] = useCreateRecipeMutation()
  const [changeCover] = useChangeAvatarMutation()
  const [confirmCoverChange] = useConfirmCoverChangeMutation()
  const [publish] = usePublishRecipeMutation()

  const coverFileHandler = (file: File) => {
    setCoverFile(file)
  }

  const handleCreateRecipe = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    if(!coverFile){
      toast.error('Debes agregar una imagen de portada')
      setLoading(false)
      return
    }
    if(recipeData.directions.length === 0){
      toast.error('Debes agregar al menos una instrucción')
      setLoading(false)
      return
    }
    if(recipeData.ingredients.length === 0){
      toast.error('Debes agregar al menos un ingrediente')
      setLoading(false)
      return
    }
    if(recipeData.name === '' || recipeData.description === '' || recipeData.num_of_servings === 0 || recipeData.cook_time === 0){
      toast.error('Debes llenar todos los campos')
      setLoading(false)
      return
    }
    if(recipeData.num_of_servings < 1 || recipeData.cook_time < 1){
      toast.error('El número de porciones y el tiempo de cocción deben ser mayores a 0')
      setLoading(false)
      return
    }
    if(recipeData.name.length > 50){
      toast.error('El nombre de la receta no puede tener más de 50 caracteres')
      setLoading(false)
      return
    }
    if(recipeData.description.length > 500){
      toast.error('La descripción de la receta no puede tener más de 500 caracteres')
      setLoading(false)
      return
    }
    try {
      const id = await createRecipe(recipeData).unwrap()
      console.log(id)
      const presignedUrl = await changeCover(id).unwrap()
      console.log(presignedUrl.presigned_url)
      const res = await fetch(presignedUrl.presigned_url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'image/jpeg'
        },
        body: coverFile 
      })
      if(res.ok){
        await confirmCoverChange(id).unwrap()
        console.log('Cover uploaded')
      }
      toast.success('Receta creada correctamente')
      if(publishRecipe){
        await publish(id).unwrap()
        toast.success('Receta publicada correctamente')
      }
    } catch (error) {
      toast.error('Error al crear la receta')
    }
    setLoading(false)
  }
  return (
    <section
        className="create__recipe"
    >
        <div className="container">
          <div className='create__recipe-container'>
            <div className='create__recipe-container-form'>
              <h1>
                Crea una nueva receta
              </h1>
              <form 
                className="create__recipe-form"
                onSubmit={handleCreateRecipe}
              >
                  <div className="form__group">
                      <label htmlFor="name">Nombre de la receta</label>
                      <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Nombre de la receta"
                          value={recipeData.name}
                          onChange={(e) => dispatch({ type: 'name', payload: e.target.value })}
                      />
                  </div>
                  <div className="form__group">
                      <label htmlFor="description">Descripción</label>
                      <textarea
                          id="description"
                          name="description"
                          placeholder="Descripción"
                          value={recipeData.description}
                          onChange={(e) => dispatch({ type: 'description', payload: e.target.value })}
                      >
                      </textarea>
                  </div>
                  <div className="form__group">
                      <label htmlFor="num_of_servings">Número de porciones</label>
                      <input
                          type="number"
                          id="num_of_servings"
                          name="num_of_servings"
                          value={recipeData.num_of_servings}
                          onChange={(e) => dispatch({ type: 'num_of_servings', payload: parseInt(e.target.value) })}
                      />
                  </div>
                  <div className="form__group">
                      <label htmlFor="cook_time">Tiempo de cocción</label>
                      <input
                          type="number"
                          id="cook_time"
                          name="cook_time"
                          value={recipeData.cook_time}
                          onChange={(e) => dispatch({ type: 'cook_time', payload: parseInt(e.target.value) })}
                      /> 
                  </div>
                  <div className="form__group-actions">
                      <button 
                          type="button"
                          className="btn"
                          onClick={() => setIsOpenDirectionsModal(true)}
                      >
                          Agregar instrucción
                      </button>
                 
                      <button
                          type="button"
                          className="btn"
                          onClick={() => setIsOpenIngredientsModal(true)}
                      >
                          Agregar ingrediente
                      </button>

                      <button
                          type="submit"
                          className={`btn ${loading ? 'disabled' : 'success'}`}
                          disabled={loading}

                      >
                          { loading ? 'Creando receta...' :  'Crear receta' }
                      </button>
                      <div>
                        <label htmlFor="publishRecipe">
                          Publicar receta
                        </label>
                        <input
                          type='checkbox'
                          id='publishRecipe'
                          name='publishRecipe'
                          checked={publishRecipe}
                          onChange={(e) => setPublishRecipe(e.target.checked)}
                        />
                      </div>
                  </div> 
                  
                  
              </form>
            </div>
            <div
                className="create__recipe-container-review"
            >
              <RecipePreview
                {...recipeData}
                onChangeCover={coverFileHandler}
              />

            </div>
          </div>
        </div>
        <ModalInput 
          onChangeValue={handleAddDirections}
          isOpen={isOpenDirectionsModal}
          closeModal={() => setIsOpenDirectionsModal(false)}
        />
        <ModalInput 
          onChangeValue={handleAddIngredients}
          isOpen={isOpenIngredientsModal}
          closeModal={() => setIsOpenIngredientsModal(false)}
        />
        
    </section>
  )
}

export default CreateRecipe