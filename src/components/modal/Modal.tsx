import ReactDOM from 'react-dom'
import Card from '../card/Card'
import './modal.css'


const Modal = (
    {
        children,
        isOpen,
        closeModal,
        className,
    }:{
        children: React.ReactNode
        isOpen: boolean,
        closeModal: () => void,
        className: string
    }
) => {
  return (
    <>
        {
            isOpen && (ReactDOM.createPortal(
                <>
                    <div 
                        className='backdrop'
                        onClick={closeModal}
                    >
                    </div>
                    <Card
                        className={className}
                    >
                        { children }
                    </Card>
                </>,
                document.getElementById('overlays') as HTMLElement
            ))
        }
    </>
  )
}

export default Modal