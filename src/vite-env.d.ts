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

type UserLogin = {
    email: string
    password: string
}

type AuthUser = {
    username: string
    name: string
    is_active: boolean
    is_admin: boolean
    avatar_url: string
}
type LoginResponse = {
    access_token: string
    access_token_expires_in: number
    refresh_token: string
    refresh_token_expires_in: number
    user: AuthUser
}

type AuthState = {
    user: AuthUser | null
    access_token: string | null
    refresh_token: string | null
    access_token_expires_in: number | null
    refresh_token_expires_in: number | null
}