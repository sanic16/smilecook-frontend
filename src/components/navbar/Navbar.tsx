import { logout } from '../../store/slices/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './navbar.css'

const Navbar = () => {
  const auth = useSelector((state: {auth: AuthState}) => state.auth)  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
    console.log('logout')
  }
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
                {
                    auth?.user ? (
                        <div className="nav__menu">
                            <ul>
                                <li>
                                    <Link to='/profile'>
                                        {auth.user.username}
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        Mis Recetas
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to='/'
                                        onClick={handleLogout}
                                    >
                                       Cerrar Sesión
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ): (
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
                    )
                }
            </div>

            {
                !auth?.user && (
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
                ) 
            }

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