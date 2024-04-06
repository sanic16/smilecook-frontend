import './loader.css'

const Loader = () => {
  return (
    <div className='loader'>
        <div className="loader__text">
            Cargando...
        </div>
        <div className="loader__ring"></div>
    </div>
  )
}

export default Loader