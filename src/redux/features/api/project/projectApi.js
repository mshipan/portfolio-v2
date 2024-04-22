import baseApi from "../baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: () => "/projects",
      providesTags: ["project"],
    }),
    AddAProject: builder.mutation({
      query: (data) => ({
        url: "/projects",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["project"],
    }),
    deleteAProject: builder.mutation({
      query: ({ id }) => ({
        url: `/project/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["project"],
    }),
  }),
});

export const {
  useGetAllProjectsQuery,
  useAddAProjectMutation,
  useDeleteAProjectMutation,
} = projectApi;
