import baseApi from "../baseApi";

const newsLetterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllNewsLetters: builder.query({
      query: () => "/newsLetters",
      providesTags: ["newsLetter"],
    }),
    getNewsLetterById: builder.query({
      query: (id) => `/newsLetter/${id}`,
      providesTags: ["newsLetter"],
    }),
    AddANewsLetter: builder.mutation({
      query: (data) => ({
        url: "/newsLetters",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["newsLetter"],
    }),

    deleteANewsLetter: builder.mutation({
      query: ({ id }) => ({
        url: `/newsLetter/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["newsLetter"],
    }),
  }),
});

export const {
  useGetAllNewsLettersQuery,
  useGetNewsLetterByIdQuery,
  useAddANewsLetterMutation,
  useDeleteANewsLetterMutation,
} = newsLetterApi;
