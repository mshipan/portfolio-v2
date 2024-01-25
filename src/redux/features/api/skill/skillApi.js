import baseApi from "../baseApi";

const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    AddASkill: builder.mutation({
      query: (data) => ({
        url: "/skills",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["skill"],
    }),

    getAllSkills: builder.query({
      query: () => "/skills",
      providesTags: ["skill"],
    }),

    getSkillById: builder.query({
      query: (id) => `/skill/${id}`,
      providesTags: ["skill"],
    }),

    updateSkill: builder.mutation({
      query: ({ id, data }) => ({
        url: `/skill/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["skill"],
    }),

    deleteSkill: builder.mutation({
      query: ({ id }) => ({
        url: `/skill/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["skill"],
    }),
  }),
});

export const {
  useAddASkillMutation,
  useGetAllSkillsQuery,
  useGetSkillByIdQuery,
  useUpdateSkillMutation,
  useDeleteSkillMutation,
} = skillApi;
