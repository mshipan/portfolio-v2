import baseApi from "../baseApi";

const servicesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: () => "/services",
      providesTags: ["service"],
    }),
    getServiceById: builder.query({
      query: (id) => `/service/${id}`,
      providesTags: ["service"],
    }),
    AddAService: builder.mutation({
      query: (data) => ({
        url: "/services",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["service"],
    }),
    updateAService: builder.mutation({
      query: ({ id, data }) => ({
        url: `/service/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["service"],
    }),
    deleteAService: builder.mutation({
      query: ({ id }) => ({
        url: `/service/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["service"],
    }),
  }),
});

export const {
  useGetAllServicesQuery,
  useGetServiceByIdQuery,
  useAddAServiceMutation,
  useUpdateAServiceMutation,
  useDeleteAServiceMutation,
} = servicesApi;
