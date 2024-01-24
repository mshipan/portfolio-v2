import { useState } from "react";
import { CiEdit, CiTrash } from "react-icons/ci";
import { PiCertificateLight } from "react-icons/pi";
import UpdateEducationCardModal from "./UpdateEducationCardModal";
import { useDeleteEducationMutation } from "../../redux/features/api/education/educationApi";
import Swal from "sweetalert2";

const EducationCard = ({ education }) => {
  const { _id, title, startYear, endYear, description } = education;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [deletEducation] = useDeleteEducationMutation();

  const handleDelete = async (_id) => {
    Swal.fire({
      title: `Are you sure to Delete "${title}" ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const result = await deletEducation({ id: _id });
          if (result.data.deletedCount > 0) {
            Swal.fire(
              "Deleted!",
              "This education has been deleted.",
              "success"
            );
          }
        } catch (error) {
          console.error("error deleting education", error);
        }
      }
    });
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="relative ml-5">
        <div className="border-l-2 border-[#55e6a5] px-8 pb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-20">
            <h1 className="md:text-lg font-poppins text-white font-bold">
              {title}
            </h1>
            <div className="flex items-center gap-3">
              <button onClick={openModal}>
                <CiEdit size={25} className="text-[#55e6a5]" title="Edit" />
              </button>
              <button onClick={() => handleDelete(_id)}>
                <CiTrash size={25} className="text-[#55e6a5]" title="Delete" />
              </button>
            </div>
          </div>
          <div className="text-[#55e6a5] text-sm mt-2 md:mt-0">
            <p>
              <span>{startYear}</span> - <span>{endYear}</span>
            </p>
          </div>
          <p className="text-white text-sm md:text-base max-w-2xl mt-3">
            {description}
          </p>
        </div>
        <div className="absolute top-0 -ml-3.5 border-2 border-[#55e6a5] p-1 rounded-full bg-[#02050a]">
          <PiCertificateLight className="text-[#55e6a5]" />
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <UpdateEducationCardModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        education={education}
      />
    </>
  );
};

export default EducationCard;
