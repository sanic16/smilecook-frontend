import { logout } from '../../store/slices/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './navbar.css'
import { useState } from 'react'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const closeMenu = () => setShowMenu(false)
  const auth = useSelector((state: {auth: AuthState}) => state.auth)  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if(showMenu) window.document.body.style.overflow = 'hidden'
  else window.document.body.style.overflow = 'auto'
  
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
                Julius<span>Food</span>
            </Link>
            <div className={`nav__menu-wrapper ${showMenu && window.innerWidth < 900 ? 'show' : undefined}`}>
                <div 
                    className="nav__menu"
                >
                {
                    auth?.user ? (
                            <ul>
                                <li>
                                    <NavLink 
                                        to='/profile'
                                        onClick={closeMenu}
                                        className={({isActive}) => `${isActive ? 'active' : undefined}` }
                                    >
                                        {auth.user.username}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to='/create-recipe'
                                        onClick={closeMenu}
                                        className={({isActive}) => `${isActive ? 'active' : undefined}` }
                                    >
                                        Crear Receta
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to='/dashboard'
                                        onClick={closeMenu}
                                        className={({isActive}) => `${isActive ? 'active' : undefined}` }
                                    >
                                        Mis Recetas
                                    </NavLink>
                                </li>
                                <li>
                                    <Link 
                                        to='/'
                                        onClick={() => {handleLogout(); closeMenu()}}                                        
                                    >
                                       Cerrar Sesión
                                    </Link>
                                </li>
                            </ul>
                        
                    ): (
                    
                        <ul>
                            <li>
                                <NavLink 
                                    to='/'
                                    onClick={closeMenu}
                                    className={({isActive}) => `${isActive ? 'active' : undefined}` }
                                >
                                    Inicio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to='/about'
                                    onClick={closeMenu}
                                    className={({isActive}) => `${isActive ? 'active' : undefined}` }
                                >
                                    Nosotros
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to='/chefs'
                                    onClick={closeMenu}
                                    className={({isActive}) => `${isActive ? 'active' : undefined}` }
                                >
                                    Chefs
                                </NavLink>
                            </li>
                        {
                            !auth?.user&& (
                            <>
                                <li
                                    className='hide__desktop'
                                >
                                    <NavLink 
                                        to='/login'                                        
                                        onClick={closeMenu}
                                        className={({isActive}) => `${isActive ? 'active' : undefined}` }
                                    >
                                        Iniciar Sesión
                                    </NavLink>
                                </li>
                                <li
                                    className='hide__desktop'
                                >
                                    <NavLink 
                                        to='/register'                                        
                                        onClick={closeMenu}
                                    >
                                        Registrarse
                                    </NavLink>
                                </li>
                            </>  
                            )
                        }
                        </ul>
                    
                    )
                }
                </div>
            </div>

            {
                !auth?.user && (
                    <div
                        className='nav__auth'
                    >
                        <NavLink 
                            to='/login'
                            className={({isActive}) => `${isActive ? 'active' : undefined}` }
                        >
                            Iniciar Sesión
                        </NavLink>
                        <NavLink 
                            to='/register'
                            className={({isActive}) => `${isActive ? 'active' : undefined}` }
                        >
                            Registrarse
                        </NavLink>
                    </div>
                ) 
            }

            <div
                className='nav__mobile'
            >
                <button
                    onClick={() => setShowMenu(prev => !prev)}
                >
                    { showMenu ? <FaTimes/> : <FaBars/>}
                </button>
            </div>

        </div>
    </nav>
  )
}

export default Navbar