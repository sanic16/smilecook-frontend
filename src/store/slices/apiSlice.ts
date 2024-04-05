import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: import.meta.env.VITE_SERVER_URL,
        prepareHeaders: (headers) => {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6dHJ1ZSwiaWF0IjoxNzEyMzE1NzEzLCJqdGkiOiI3ZTA0NGQ2NC0wMTU0LTRiNWQtOTAwZS0wMTVhNWFhNGZlNmMiLCJ0eXBlIjoiYWNjZXNzIiwic3ViIjoyLCJuYmYiOjE3MTIzMTU3MTMsImNzcmYiOiI2ZDQ5ZDJmMi03ODJkLTQ1ZTEtYjk2Ni01NGQwMTI0YmZmMWIiLCJleHAiOjE3MTI0MDU3MTN9.0V40i1mYLsPUEpE06v8GY31-LSVrmqKOtNn1vpPvqlE'
            headers.set('Authorization', 'Bearer ' + token)
        }
    }),
    endpoints: () => ({})
})

export default api