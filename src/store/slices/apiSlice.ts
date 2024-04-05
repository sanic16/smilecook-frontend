import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: import.meta.env.VITE_SERVER_URL,
        prepareHeaders: (headers) => {
            const auth = JSON.parse(localStorage.getItem('auth') as string)
            if(auth && auth.access_token){
                headers.set('Authorization', `Bearer ${auth.access_token}`)
            }
            return headers
        }
    }),
    endpoints: () => ({})
})

export default api