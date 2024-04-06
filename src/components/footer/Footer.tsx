import { FaEnvelope, FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container footer__container">
            <div className="footer__info">

                <Link to='/' className='nav__logo'>
                    Julius<span>Food</span>
                </Link>

                <p>
                    Aquí en JuliusFood, nos encanta la comida y creemos que todos deberían tener acceso a recetas deliciosas y saludables.
                    Encuentra recetas de todo tipo, desde desayunos hasta cenas y postres.

                </p>
               
                <div
                    className='footer__social'
                >
                    <a 
                        href="https://facebook.com"
                        rel='noreferrer noopener'
                        target='_blank' 
                    >
                        <FaFacebook />
                    </a>
                    <a 
                        href="https://instagram.com"
                        rel='noreferrer noopener'
                        target='_blank'
                    >
                        <FaInstagram />
                    </a>
                    <a 
                        href="https://twitter.com"
                        rel='noreferrer noopener'
                        target='_blank'
                    >
                        <FaTwitter />
                    </a>
                </div>
            </div>
            <div
                className='footer__contact'
            >
                <h3>
                    Contacto
                </h3>
                <ul>
                    <li>
                        <a href="mailto:julio.sanic.gt.256@gmail.com">
                            <FaEnvelope /> julio.sanic.gt.256@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href="tel:+502 58385370">
                            <FaPhoneAlt /> +502 58385370
                        </a>
                    </li>
                    <li>
                        <a>
                            San Miguel Petapa, Guatemala
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer__menu">
                <h3>
                    Menú
                </h3>
                <ul>
                    <li>
                        <Link to='/'>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to='/recipes'>
                            Recetas
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            Sobre Nosotros
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
                <h3>
                    Términos y Condiciones
                </h3>
                <ul>
                    <li>
                        Política de Privacidad
                    </li>
                    <li>
                        Términos de Uso
                    </li>
                    <li>
                        Política de Cookies
                    </li>
                    <li>
                        Aviso Legal
                    </li>
                </ul>
            </div>
        </div>
        <div className="container copyright">
            <p>
                &copy; { new Date().getFullYear() } JuliusFood. Todos los derechos reservados.
            </p>
            
        </div>
    </footer>
  )
}

export default Footer