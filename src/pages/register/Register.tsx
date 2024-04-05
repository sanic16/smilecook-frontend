import React, { useState } from "react"
import { useRegisterMutation } from "../../store/slices/userApiSlice"

import './register.css'
import { toast } from "react-toastify"


const Register = () => {
  const [userData, setUserData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    bio: ''
  })  

  const [register] = useRegisterMutation()
 
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
    } catch (error) {
        toast.error('Error al registrarse')
    }
  }

  return (
    <section className="register">
        <div className="form__container">
            <h1>
                Registrarse
            </h1>
            <form 
                className="form form--register"
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
                >
                    Registrarse
                </button>
            </form>
        </div>
    </section>
  )
}

export default Register