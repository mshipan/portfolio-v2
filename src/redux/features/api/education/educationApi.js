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
  }),
});

export const { useGetAllEducationsQuery, useAddAnEducationMutation } =
  educationApi;
