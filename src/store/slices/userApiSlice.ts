import api from "./apiSlice";

const userApiSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<User, UserRegistration>({
            query: (body) => ({
                url: 'users',
                method: 'POST',
                body: body
            }) 
        }),
        login: builder.mutation<LoginResponse, UserLogin>({
            query: (body) => ({
                url: 'token',
                method: 'POST',
                body
            })
        }),
        changeAvatar: builder.mutation<{presigned_url: string}, void>({
            query: () => ({
                url: 'users/avatar',
                method: 'PUT'
            })
        }),
        confirmAvatarChange: builder.mutation<void, void>({
            query: () => ({
                url: 'users/avatar',
                method: 'POST'
            })
        })
    })
})

export const {
    useRegisterMutation,
    useLoginMutation,
    useChangeAvatarMutation,
    useConfirmAvatarChangeMutation
} = userApiSlice