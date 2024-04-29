import baseApi from "../baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => "/blogs",
      providesTags: ["blog"],
    }),
    getBlogById: builder.query({
      query: (id) => `/blog/${id}`,
      providesTags: ["blog"],
    }),
    AddABlog: builder.mutation({
      query: (data) => ({
        url: "/blogs",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["blog"],
    }),
    updateABlog: builder.mutation({
      query: ({ id, data }) => ({
        url: `/blog/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["blog"],
    }),
    deleteABlog: builder.mutation({
      query: ({ id }) => ({
        url: `/blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"],
    }),
    addLikeToBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/${id}/like`,
        method: "POST",
      }),
      invalidatesTags: ["blog"],
    }),
    removeLikeFromBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/${id}/like`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"],
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useGetBlogByIdQuery,
  useAddABlogMutation,
  useUpdateABlogMutation,
  useDeleteABlogMutation,
  useAddLikeToBlogMutation,
  useRemoveLikeFromBlogMutation,
} = blogApi;
