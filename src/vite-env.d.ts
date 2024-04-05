/// <reference types="vite/client" />

interface User {
    id: number 
    username: string
    name: string
    email: string
    bio: string
    is_active: boolean
    is_admin: boolean
    avatar_url: string | null
    created_at: string
    updated_at: string    
}

type UserRegistration = {
    username: string
    name: string
    email: string
    password: string
    bio: string  
} 