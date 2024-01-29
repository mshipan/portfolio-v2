import baseApi from "../baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    AddAProject: builder.mutation({
      query: (data) => ({
        url: "/addprojects",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["project"],
    }),
  }),
});

export const { useAddAProjectMutation } = projectApi;
