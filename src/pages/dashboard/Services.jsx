import Button from "../../components/shared/Button";
import {
  useAddAServiceMutation,
  useDeleteAServiceMutation,
  useGetAllServicesQuery,
} from "../../redux/features/api/service/servicesApi";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { imageUpload } from "../../utils/imageFetch";
import Swal from "sweetalert2";
import UpdateServiceModal from "../../components/dashboard/UpdateServiceModal";

const Services = () => {
  const [createLoading, setCreateLoading] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isUpdateModalClose, setIsUpdateModalClose] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const { data: allService } = useGetAllServicesQuery();
  const [addAService] = useAddAServiceMutation();
  const [deleteAService] = useDeleteAServiceMutation();

  const serviceImage = watch("serviceImage");

  const now = new Date();

  const closeModal = () => {
    document.getElementById("my_modal_4").close();
  };
  const closeUpdateModal = () => {
    setIsUpdateModalClose(true);
    setSelectedServiceId(null);
  };

  const openEditModal = (serviceId) => {
    setIsUpdateModalOpen(true);
    setSelectedServiceId(serviceId);
  };

  const onCreateService = async (data) => {
    setCreateLoading(true);
    try {
      const imageData = await imageUpload(serviceImage[0]);
      data.createdAt = now;
      data.serviceImage = imageData.data.display_url;

      const result = await addAService(data);
      if (result.data) {
        Swal.fire({
          title: "Service Added Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
        reset();
        setCreateLoading(false);
        closeModal();
      } else {
        Swal.fire({
          title: "Service Added Failed!",
          text: "Press OK to continue",
          icon: "error",
          confirmButtonText: "OK",
        });
        setCreateLoading(false);
      }
    } catch (error) {
      console.error("An unexpected error occurred", error);
      setCreateLoading(false);
    }
  };

  const handleDeleteAService = async (_id) => {
    Swal.fire({
      title: "Are you sure to Delete this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const result = await deleteAService({ id: _id });
          if (result.data.deletedCount > 0) {
            Swal.fire("Deleted!", "This service has been deleted.", "success");
          }
        } catch (error) {
          console.error("error deleting service", error);
        }
      }
    });
  };

  return (
    <div className="h-auto">
      <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-1/2 md:max-xl:w-full">
        <h1 className="text-2xl font-notoSans text-[#55e6a5]">Services</h1>
        <div>
          <Button
            text="Create Service"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 md:max-xl:w-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-16 mt-16">
        {allService?.map((service) => (
          <div
            key={service?._id}
            className="border border-[#55e6a5] rounded-md md:w-80 relative flex flex-col items-end gap-4"
          >
            <div className="flex items-center justify-center w-full h-16 absolute -top-8 right-0">
              <div className="w-16 bg-[#02050a] p-2">
                <img src={service?.serviceImage} alt="Service Image" />
              </div>
            </div>

            <div className="flex flex-col items-center mt-10 px-3">
              <h1 className="font-notoSans text-lg text-white">
                {service?.serviceTitle}
              </h1>
              <p className="font-poppins text-sm text-slate-400 text-center">
                {service?.serviceDescription}
              </p>
            </div>

            <div className="px-3 flex items-center gap-2 mb-3">
              <button
                className=" p-1 bg-[#55e6a5] hover:bg-[#141c27] text-black hover:text-[#55e6a5] border border-[#55e6a5]"
                onClick={() => openEditModal(service?._id)}
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteAService(service?._id)}
                className=" p-1 bg-[#141c27] hover:bg-[#55e6a5] text-[#55e6a5] hover:text-black border border-[#55e6a5]"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <dialog id="my_modal_4" className="modal modal-middle sm:modal-middle">
        <div className="modal-box bg-[#141c27]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white bg-[#243144]">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg font-notoSans mb-5 text-[#55e6a5]">
            Create Service
          </h3>
          <div>
            <form
              onSubmit={handleSubmit(onCreateService)}
              className="flex flex-col gap-4"
            >
              <div className="form-control">
                <div className="flex flex-row items-center gap-4 mb-2">
                  <label
                    htmlFor="serviceTitle"
                    className="text-white font-poppins"
                  >
                    Service Title:
                  </label>
                  {errors.serviceTitle && (
                    <p className="text-yellow-500 text-xs font-notoSans">
                      Service Title is required. **
                    </p>
                  )}
                </div>
                <input
                  type="text"
                  name="serviceTitle"
                  {...register("serviceTitle", { required: true })}
                  placeholder="Service Title..."
                  className="w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                />
              </div>

              <div className="form-control">
                <div className="flex flex-row items-center gap-4 mb-2">
                  <label
                    htmlFor="serviceImage"
                    className="text-white font-poppins"
                  >
                    Service Image:{" "}
                    <span className="text-xs">( icons only )</span>
                  </label>
                  {errors.serviceImage && (
                    <p className="text-yellow-500 text-xs font-notoSans">
                      Service Image is required. **
                    </p>
                  )}
                </div>
                <input
                  type="file"
                  name="serviceImage"
                  {...register("serviceImage", { required: true })}
                  placeholder="Service Image..."
                  className="w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                />
              </div>

              <div className="form-control">
                <div className="flex flex-row items-center gap-4 mb-2">
                  <label
                    htmlFor="serviceDescription"
                    className="text-white font-poppins"
                  >
                    Service Description:
                  </label>
                  {errors.serviceDescription && (
                    <p className="text-yellow-500 text-xs font-notoSans">
                      Service Description is required. **
                    </p>
                  )}
                </div>
                <textarea
                  name="serviceDescription"
                  {...register("serviceDescription", { required: true })}
                  placeholder="Service Description..."
                  cols="30"
                  rows="5"
                  className="w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                ></textarea>
              </div>
              <div>
                <Button
                  text={`${createLoading ? "Creating..." : "Create Service"}`}
                  type="submit"
                  className="border border-[#55e6a5]"
                />
              </div>
            </form>
          </div>
        </div>
      </dialog>

      {selectedServiceId && (
        <UpdateServiceModal
          isUpdateModalOpen={isUpdateModalOpen}
          isUpdateModalClose={isUpdateModalClose}
          serviceId={selectedServiceId}
          onClose={closeUpdateModal}
        />
      )}
    </div>
  );
};

export default Services;
