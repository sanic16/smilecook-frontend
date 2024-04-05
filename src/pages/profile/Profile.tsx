import Avatar from "../../components/avatar/Avatar"
import './profile.css'

const Profile = () => {
 

  return (
    <section className="profile">
        <div className="container profile__container">
            
            <div className="profile__form-container">
                <h1>
                    Perfil
                </h1>         
                <Avatar />
            
                <form className="profile__form">
                    
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
                        <label htmlFor="bio">
                            Biografía
                        </label>
                        <textarea
                            name="bio"
                        >
                        </textarea>                            
                    </div>
                    <button
                        type="submit"
                        className="btn primary"
                    >
                        Guardar
                    </button>
                </form>
                
            </div>
        </div>
    </section>
  )
}

export default Profile