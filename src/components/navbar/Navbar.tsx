import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './navbar.css'

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className="container nav__container">
            <Link 
                to='/'
                className='nav__logo'
            >
                JuliusFood 
            </Link>
            <div className="nav__menu-wrapper">
                <div className="nav__menu">
                    <ul>
                        <li>
                            <Link to='/'>
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                Nosotros
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                Chefs
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                className='nav__auth'
            >
                <Link to='/login'>
                    Iniciar Sesión
                </Link>
                <Link to='/register'>
                    Registrarse
                </Link>
            </div>

            <div
                className='nav__mobile'
            >
                <button>
                    <FaBars />
                </button>
            </div>

        </div>
    </nav>
  )
}

export default Navbar