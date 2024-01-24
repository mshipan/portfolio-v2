import baseApi from "../baseApi";

const educationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllEducations: builder.query({
      query: () => "/educations",
      providesTags: ["education"],
    }),

    AddAnEducation: builder.mutation({
      query: (data) => ({
        url: "/educations",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["education"],
    }),

    getEducationById: builder.query({
      query: (id) => `/education/${id}`,
      providesTags: ["education"],
    }),

    updateEducation: builder.mutation({
      query: ({ id, data }) => ({
        url: `/education/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["education"],
    }),

    deleteEducation: builder.mutation({
      query: ({ id }) => ({
        url: `/education/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["education"],
    }),
  }),
});

export const {
  useGetAllEducationsQuery,
  useAddAnEducationMutation,
  useGetEducationByIdQuery,
  useUpdateEducationMutation,
  useDeleteEducationMutation,
} = educationApi;
