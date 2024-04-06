import api from "./apiSlice";

const recipeApiSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        getRecipes: builder.query<{data: Recipe[]}, void>({
            query: () => ({
                url: 'recipes',
                method: 'GET',
            })
        }),
        createRecipe:builder.mutation<{id: number}, RecipeCreation>({
            query: (body) => ({
                url: 'recipes',
                method: 'POST',
                body: body
            })
        }),
        changeAvatar: builder.mutation<{presigned_url: string}, {id: number}>({
            query: (body) => ({
                url: `recipes/${body.id}/cover`,
                method: 'PUT'
            })
        }),
        confirmCoverChange: builder.mutation<void, {id: number}>({
            query: (body) => ({
                url: `recipes/${body.id}/cover`,
                method: 'POST'
            })
        })
    })
})

export const {
    useGetRecipesQuery,
    useCreateRecipeMutation,
    useChangeAvatarMutation,
    useConfirmCoverChangeMutation
} = recipeApiSlice