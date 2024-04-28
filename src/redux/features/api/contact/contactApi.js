import baseApi from "../baseApi";

const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: () => "/contacts",
      providesTags: ["contact"],
    }),
    getContactById: builder.query({
      query: (id) => `/contact/${id}`,
      providesTags: ["contact"],
    }),
    sendEmail: builder.mutation({
      query: (data) => ({
        url: "/contacts",
        method: "POST",
        body: data,
      }),
      providesTags: ["contact"],
    }),
    updateIsNewStatusOnContact: builder.mutation({
      query: ({ id, isNew }) => ({
        url: `/contact/${id}`,
        method: "PATCH",
        body: isNew,
      }),
      invalidatesTags: ["contact"],
    }),
    deleteAContact: builder.mutation({
      query: ({ id }) => ({
        url: `/contact/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useGetContactByIdQuery,
  useSendEmailMutation,
  useUpdateIsNewStatusOnContactMutation,
  useDeleteAContactMutation,
} = contactApi;
