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

type Recipe = {
    id: number
    name: string
    description: string
    directions: string[]
    ingredients: string[]
    num_of_servings: number
    cook_time: number
    is_publish: boolean
    cover_image: string
    popularity: number
    author: {
        id: number
        username: string
    },
    created_at: string
    updated_at: string
}

type RecipeCreation = {
    name: string
    description: string
    num_of_servings: number
    cook_time: number
    directions: string[]
    ingredients: string[]
}

type RecipeAction = 
  | { type: 'name', payload: string }
  | { type: 'description', payload: string }
  | { type: 'num_of_servings', payload: number }
  | { type: 'cook_time', payload: number }
  | { type: 'directions', payload: string[] }
  | { type: 'ingredients', payload: string[] };