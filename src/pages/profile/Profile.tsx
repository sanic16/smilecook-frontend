import Avatar from "../../components/avatar/Avatar"
import './profile.css'

const Profile = () => {
 

  return (
    <section className="profile">
        <div className="container profile__container">
            <h1>
                Perfil
            </h1>
            <div className="form__container">
                <div
                    className="form__container-left"
                >                    
                <Avatar />
                </div>
                <div
                    className="form__container-right"
                >
                    <form>
                        <div className="fields__wrapper">
                        <div>
                            <label
                                htmlFor="username"
                            >
                                Nombre de usuario
                            </label>
                            <input
                                type="text"
                                name="username"
                            />
                        </div>
                        <div>
                            <label htmlFor="name">
                                Nombre
                            </label>
                            <input
                                type="text"
                                name="name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                name="password"
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">
                                Confirmar contraseña
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                            />
                        </div>
                        <div>
                            <label htmlFor="bio">
                                Biografía
                            </label>
                            <textarea
                                name="bio"
                            >
                            </textarea>                            
                        </div>
                        </div>
                        <button
                            type="submit"
                        >
                            Guardar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profile