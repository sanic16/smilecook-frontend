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
        changeAvatar: builder.mutation<{presignedUrl: string}, void>({
            query: () => ({
                url: 'users/avatar',
                method: 'PUT'
            })
        }),
        uploadAvatar: builder.mutation<void, {presignedUrl: string, file: File}>({
            query: ({presignedUrl, file }) => ({
                url: presignedUrl,
                method: 'PUT',
                body: file
            })
        })
    })
})

export const {
    useRegisterMutation,
    useChangeAvatarMutation,
    useUploadAvatarMutation
} = userApiSlice