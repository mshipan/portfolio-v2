import baseApi from "../baseApi";

const aboutMeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //about-me
    getAboutMe: builder.query({
      query: () => "/about-me",
      providesTags: ["aboutMe"],
    }),
    updateAboutMe: builder.mutation({
      query: ({ id, data }) => ({
        url: `/about-me/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["aboutMe"],
    }),
  }),
});

export const { useGetAboutMeQuery, useUpdateAboutMeMutation } = aboutMeApi;
