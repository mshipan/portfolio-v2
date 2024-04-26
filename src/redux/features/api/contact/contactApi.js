import baseApi from "../baseApi";

const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendEmail: builder.mutation({
      query: (data) => ({
        url: "/contacts",
        method: "POST",
        body: data,
      }),
      providesTags: ["contact"],
    }),
  }),
});

export const { useSendEmailMutation } = contactApi;
