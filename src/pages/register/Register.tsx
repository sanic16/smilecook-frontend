import React, { useState } from "react"
import { useRegisterMutation } from "../../store/slices/userApiSlice"
import { useNavigate } from "react-router-dom"

import './register.css'
import { toast } from "react-toastify"
import { Link } from "react-router-dom"


const Register = () => {
  const [userData, setUserData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    bio: ''
  })  

  const [register, { isLoading }] = useRegisterMutation()

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
       
        await register({
            username: userData.username,
            name: userData.name,
            email: userData.email,
            password: userData.password,
            bio: userData.bio
        }).unwrap()
        toast.success('Te has registrado correctamente!')
        navigate('/login')
    } catch (error) {
        toast.error('Error al registrarse')
    }
  }

  return (
    <section className="register">
        <div className="container form__container">
            <div className=" form__wrapper">                
                <h1>
                    Registrarse
                </h1>
                <form 
                    className="form__auth"
                    onSubmit={handleRegistration}
                >
                    <input 
                        type="text" 
                        name="username"
                        placeholder="Nombre de Usuario"
                        value={userData.username}
                        onChange={handleInputChange}
                    />
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Nombre y Apellido"
                        value={userData.name}
                        onChange={handleInputChange} 
                    />
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
                    <input  
                        type="password"
                        name="confirmPassword"
                        placeholder="Repetir Contraseña"
                        value={userData.confirmPassword}
                        onChange={handleInputChange}
                    />
                    <textarea
                        name="bio"
                        placeholder="Escribe algo asombroso!!!"
                        value={userData.bio}
                        onChange={handleInputChange}
                    >
                    </textarea>
                    <button
                        type="submit"
                        className={`btn ${isLoading ? 'disabled': ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Cargando...' : 'Registrarse'}
                    </button>
                </form>
                <small>
                    ¿Ya tienes una cuenta? <Link to='/login'>Iniciar Sesión</Link> 
                </small>
            </div>
        </div>
    </section>
  )
}

export default Register