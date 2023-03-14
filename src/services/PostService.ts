import {BaseQueryApi, createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {EndpointBuilder, ReducerPathFrom, TagTypesFrom} from "@reduxjs/toolkit/dist/query/endpointDefinitions";

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (build) => ({
        fetchAllUsers: build.query({
            query: () => ({
                url: `/posts`
            })
        })
    })
})