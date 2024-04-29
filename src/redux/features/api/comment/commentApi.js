import baseApi from "../baseApi";

const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCommentToBlog: builder.mutation({
      query: ({ id, name, role, email, comment, createdAt }) => ({
        url: `/blog/${id}/comment`,
        method: "POST",
        body: { name, role, email, comment, createdAt },
      }),
      invalidatesTags: ["blog"],
    }),
  }),
});

export const { useAddCommentToBlogMutation } = commentApi;
