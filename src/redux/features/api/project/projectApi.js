import baseApi from "../baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: () => "/projects",
      providesTags: ["project"],
    }),
    getProjectById: builder.query({
      query: (id) => `/project/${id}`,
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
    updateAProject: builder.mutation({
      query: ({ id, data }) => ({
        url: `/project/${id}`,
        method: "PUT",
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
  useGetProjectByIdQuery,
  useAddAProjectMutation,
  useUpdateAProjectMutation,
  useDeleteAProjectMutation,
} = projectApi;
