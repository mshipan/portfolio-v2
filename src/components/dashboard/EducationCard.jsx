import { CiEdit, CiTrash } from "react-icons/ci";
import { PiCertificateLight } from "react-icons/pi";

const EducationCard = () => {
  return (
    <>
      <div className="relative ml-5">
        <div className="border-l-2 border-[#55e6a5] px-8 pb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-20">
            <h1 className="md:text-lg font-poppins text-white font-bold">
              Higher Secondary School Certificate (HSC)
            </h1>
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                <CiEdit size={25} className="text-[#55e6a5]" title="Edit" />
              </button>
              <CiTrash size={25} className="text-[#55e6a5]" title="Delete" />
            </div>
          </div>
          <div className="text-[#55e6a5] text-sm mt-2 md:mt-0">
            <p>
              <span>2010</span> - <span>2011</span>
            </p>
          </div>
          <p className="text-white text-sm md:text-base max-w-2xl mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            pariatur doloribus alias aliquam sunt accusamus asperiores
            recusandae rem ea ipsum!
          </p>
        </div>
        <div className="absolute top-0 -ml-3.5 border-2 border-[#55e6a5] p-1 rounded-full bg-[#02050a]">
          <PiCertificateLight className="text-[#55e6a5]" />
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  );
};

export default EducationCard;
