import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_baseApi,
  }),
  tagTypes: ["aboutMe"],
  endpoints: (builder) => ({
    //about-me
    getAboutMe: builder.query({
      query: () => "/about-me",
      providesTags: ["aboutMe"],
    }),
  }),
});

export const { useGetAboutMeQuery } = baseApi;

export default baseApi;
