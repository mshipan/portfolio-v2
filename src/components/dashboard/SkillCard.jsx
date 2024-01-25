import { CiEdit, CiTrash } from "react-icons/ci";
import ProgressBar from "../ProgressBar";
import UpdateSkillModal from "./UpdateSkillModal";
import { useState } from "react";
import Swal from "sweetalert2";
import { useDeleteSkillMutation } from "../../redux/features/api/skill/skillApi";

const SkillCard = ({ isInView, progressBarRef, skill }) => {
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);

  const openModal = () => {
    setIsSkillModalOpen(true);
  };

  const closeModal = () => {
    setIsSkillModalOpen(false);
  };

  const [deleteSkill] = useDeleteSkillMutation();

  const handleDelete = async (_id) => {
    Swal.fire({
      title: `Are you sure to Delete "${skill?.skillName}" ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const result = await deleteSkill({ id: _id });
          if (result.data.deletedCount > 0) {
            Swal.fire("Deleted!", "This skill has been deleted.", "success");
          }
        } catch (error) {
          console.error("error deleting education", error);
        }
      }
    });
  };
  return (
    <>
      <div className="flex flex-row items-center justify-between gap-5">
        <ProgressBar
          text={skill?.skillName}
          value={skill?.skillPercentage}
          percentValue={skill?.skillPercentage}
          isVisible={isInView}
          ref={progressBarRef}
          className="w-full"
        />
        <div className="flex items-center gap-3">
          <button onClick={openModal}>
            <CiEdit size={25} className="text-[#55e6a5]" title="Edit" />
          </button>
          <button onClick={() => handleDelete(skill?._id)}>
            <CiTrash size={25} className="text-[#55e6a5]" title="Delete" />
          </button>
        </div>
      </div>
      <UpdateSkillModal
        isSkillModalOpen={isSkillModalOpen}
        closeModal={closeModal}
        skill={skill}
      />
    </>
  );
};

export default SkillCard;
