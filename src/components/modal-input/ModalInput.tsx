import { FormEvent, useState } from 'react'
import Modal from '../modal/Modal'
import './modalInput.css'

const ModalInput = (
    {
        onChangeValue,
        isOpen,
        closeModal
        
    }:{
        onChangeValue: (value: string) => void,
        isOpen: boolean,
        closeModal: () => void
    }
) => { 
   
  const [inputValue, setInputValue] = useState<string>('')
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(inputValue){
        onChangeValue(inputValue)
    }
    setInputValue('')
  }  
  return (
    <Modal 
        className='modal__input'
        isOpen={isOpen}
        closeModal={closeModal}
    >
        <h3>
            Agregar {onChangeValue.name === 'handleAddDirections' ? 'Instrucción' : 'Ingredientes'}
        </h3>
        <form
            onSubmit={handleSubmit}
        >
            <input
                type='text'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <input 
                type='submit' 
                value={'Agregar Instrucción'}
                className='btn'
            />
            
        </form>
    </Modal>
  )
}

export default ModalInput