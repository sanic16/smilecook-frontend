import { useState } from "react"
import { 
    useChangeAvatarMutation, 
    useConfirmAvatarChangeMutation 
} from "../../store/slices/userApiSlice"

import profile from './../../assets/julio.jpg'
import { toast } from "react-toastify"

const Avatar = () => {
    const [avatar, setAvatar] = useState<File | null>(null)
    const [avatarUrl, setAvatarUrl] = useState<string>(profile)
  
    const [changeAvatar] = useChangeAvatarMutation()
  
    const [confirmAvatarChange] = useConfirmAvatarChangeMutation()
    
    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files
      if(file){
          setAvatar(file[0])
          setAvatarUrl(URL.createObjectURL(file[0]))
      }
    }
  
    const handleUploadAvatar = async(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
          const pregignedUrl = await changeAvatar().unwrap()
          console.log(pregignedUrl.presigned_url)
          const res = await fetch(pregignedUrl.presigned_url, {
              method: 'PUT',
              headers: {
                  'Content-Type': 'image/jpeg'
              },
              body: avatar
          })
          if(res.ok){
              await confirmAvatarChange()
              toast.success('Imagen subida correctamente')
  
          }else{
              throw new Error('Error al subir la imagen')
          }
          setAvatar(null)
      } catch (error) {
          toast.error('Error al subir la imagen') 
      }
    }
  return (
    <div className="profile__avatar-container">
        <label 
            htmlFor="avatar"
        >
            <div className="profile__avatar">
                <img 
                    src={avatarUrl} 
                    alt="Avatar" 
                />
            </div>
        </label>
        <form
            onSubmit={handleUploadAvatar}
        >
            {
                !avatar && <label
                className="btn white"
                htmlFor="avatar"
            >
                Seleccionar
            </label>
            }
            <input 
                type="file" 
                id="avatar"
                onChange={handleAvatarChange}
            />
            {
                avatar && (
                    <button
                        className="btn info"
                    >
                        Subir
                    </button>
                )
            }
            
        </form>
    </div>
  )
}

export default Avatar