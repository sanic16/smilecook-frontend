import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: import.meta.env.VITE_SERVER_URL,
    }),
    endpoints: () => ({})
})

export default api