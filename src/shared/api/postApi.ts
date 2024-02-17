import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PostType } from './models'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com'}),
  endpoints: (builder) => ({
    getPosts: builder.query<PostType[], number>({
      query: (page) => `/posts?_start=${page * 20}&_limit=20`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        return [...currentCache, ...newItems];
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      }
    }),
    getPostById: builder.query<PostType, number> ({
      query: (postId) => `/posts/${postId}`
    }),
    getFullPosts: builder.query<PostType[], void> ({
      query: () => `/posts`
    })
  })
});

