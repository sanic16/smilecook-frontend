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
        }),
        publishRecipe: builder.mutation<void, {id: number}>({
            query: (body) => ({
                url: `recipes/${body.id}/publish`,
                method: 'PUT'
            })
        }),
        unPublishRecipe: builder.mutation<void, {id: number}>({
            query: (body) => ({
                url: `recipes/${body.id}/publish`,
                method: 'DELETE'
            })
        }),
        getMyRecipes: builder.query<{data: Recipe[]}, void>({
            query: () => ({
                url: 'me/recipes',
                method: 'GET',
            })
        }),
        deleteRecipe: builder.mutation<void, {id: number}>({
            query: (body) => ({
                url: `recipes/${body.id}`,
                method: 'DELETE'
            })
        }),
        getRecipe: builder.query<Recipe, {id: number}>({
            query: (body) => ({
                url: `recipes/${body.id}`
            })
        })
    })
})

export const {
    useGetRecipesQuery,
    useCreateRecipeMutation,
    useChangeAvatarMutation,
    useConfirmCoverChangeMutation,
    usePublishRecipeMutation,
    useUnPublishRecipeMutation,
    useGetMyRecipesQuery,
    useDeleteRecipeMutation,
    useGetRecipeQuery
} = recipeApiSlice