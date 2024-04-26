import { useState } from "react";
import {
  useGetServiceByIdQuery,
  useUpdateAServiceMutation,
} from "../../redux/features/api/service/servicesApi";
import { useForm } from "react-hook-form";
import Button from "../shared/Button";
import { imageUpload } from "../../utils/imageFetch";
import Swal from "sweetalert2";

const UpdateServiceModal = ({ isUpdateModalOpen, serviceId, onClose }) => {
  const [updateLoading, setUpdateLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { data: singleService } = useGetServiceByIdQuery(serviceId);
  const [updateAService] = useUpdateAServiceMutation();

  const serviceImage = watch("serviceImage");

  const onUpdateService = async (data) => {
    setUpdateLoading(true);

    // Exclude createdAt field from the update data
    const { createdAt, ...updateData } = data;

    const imageData = await imageUpload(serviceImage[0]);
    updateData.serviceImage = imageData.data.display_url;

    try {
      const result = await updateAService({
        id: serviceId,
        data: updateData,
      });

      if (result.data.modifiedCount > 0) {
        Swal.fire({
          title: "Service Updated Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
        setUpdateLoading(false);
        onClose();
      }
    } catch (error) {
      console.error("Error updating Service:", error);
      setUpdateLoading(false);
    }
  };

  return (
    <dialog
      open={isUpdateModalOpen}
      className="modal modal-middle sm:modal-middle"
    >
      <div className="modal-box bg-[#141c27]">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white bg-[#243144]"
          onClick={onClose}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg mb-4 font-notoSans text-[#55e6a5]">
          Update Service
        </h3>
        <form
          onSubmit={handleSubmit(onUpdateService)}
          className="flex flex-col gap-4"
        >
          <div className="form-control">
            <div className="flex flex-row items-center gap-4 mb-2">
              <label
                htmlFor="serviceTitle"
                className="text-white font-poppins mb-2"
              >
                Service Title:
              </label>
              {errors.serviceTitle && (
                <p className="text-yellow-500 text-xs font-notoSans">
                  Service Image is required. **
                </p>
              )}
            </div>
            <input
              type="text"
              name="serviceTitle"
              {...register("serviceTitle", { required: true })}
              placeholder="Service Title..."
              className="w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
              defaultValue={singleService?.serviceTitle}
            />
          </div>

          <div className="form-control">
            <div className="flex flex-row items-center gap-4 mb-2">
              <label htmlFor="serviceImage" className="text-white font-poppins">
                Service Image: <span className="text-xs">( icons only )</span>
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
              defaultValue={singleService?.serviceDescription}
            ></textarea>
          </div>
          <div>
            <Button
              text={`${updateLoading ? "Updating..." : "Update Service"}`}
              type="submit"
              className="border border-[#55e6a5]"
            />
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default UpdateServiceModal;
