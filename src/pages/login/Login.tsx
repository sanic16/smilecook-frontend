import React, { useState } from "react"
import { useLoginMutation } from "../../store/slices/userApiSlice"
import { useNavigate } from "react-router-dom"

import { toast } from "react-toastify"
import { Link } from "react-router-dom"


const Login = () => {
  const [userData, setUserData] = useState({    
    email: '',
    password: '',
  })  

  const [login, { isLoading }] = useLoginMutation()

  const navigate = useNavigate()
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserData(prevData => ({
        ...prevData,
        [e.target.name]: e.target.value 
    })) 
  }

  const handleRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
       
        const res = await login({
            email: userData.email,
            password: userData.password,
        }).unwrap()
        console.log(res)
        toast.success('Has iniciado sesión!!')
        navigate('/')
    } catch (error) {
        toast.error('Error al iniciar sesión')
    }
  }

  return (
    <section className="register">
        <div className="container form__container">
            <div className=" form__wrapper">                
                <h1>
                    Iniciar Sesión
                </h1>
                <form 
                    className="form__auth"
                    onSubmit={handleRegistration}
                >
                                       
                    <input
                        type="text"
                        name="email"
                        placeholder="Correo Electrónico"
                        value={userData.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={userData.password}
                        onChange={handleInputChange}
                    />
                    
                    <button
                        type="submit"
                        className={`btn ${isLoading ? 'disabled': ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Cargando...' : 'Registrarse'}
                    </button>
                </form>
                <small>
                    ¿Aún no te has registrado? <Link to='/register'>Registrarse</Link> 
                </small>
            </div>
        </div>
    </section>
  )
}

export default Login