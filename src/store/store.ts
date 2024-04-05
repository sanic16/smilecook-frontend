import { configureStore } from "@reduxjs/toolkit";
import api from "./slices/apiSlice";

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    devTools: true
})

export default store