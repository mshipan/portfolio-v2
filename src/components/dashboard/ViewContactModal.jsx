import React from "react";
import { useGetContactByIdQuery } from "../../redux/features/api/contact/contactApi";
import { useForm } from "react-hook-form";

const ViewContactModal = ({ isContactModalOpen, contactId, onClose }) => {
  const { data: singleContact } = useGetContactByIdQuery(contactId);

  return (
    <dialog
      open={isContactModalOpen}
      id="my_modal_5"
      className="modal modal-middle sm:modal-middle"
    >
      <div className="modal-box bg-[#141c27]">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white bg-[#243144]"
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg mb-4 font-notoSans text-[#55e6a5]">
          Contact Details
        </h3>
        <div>
          <form className="flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="form-control">
                <label htmlFor="name" className="text-white font-poppins mb-2">
                  Contact Name:
                </label>
                <input
                  type="text"
                  name="name"
                  readOnly
                  className="w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                  value={singleContact?.name}
                />
              </div>

              <div className="form-control">
                <label
                  htmlFor="contactEmail"
                  className="text-white font-poppins mb-2"
                >
                  Contact Email:
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  readOnly
                  className="py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                  value={singleContact?.email}
                />
              </div>
            </div>

            <div className="form-control">
              <label htmlFor="subject" className="text-white font-poppins mb-2">
                Subject:
              </label>
              <input
                type="text"
                name="subject"
                readOnly
                value={singleContact?.subject}
                className="w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
              />
            </div>

            <div className="form-control">
              <label
                htmlFor="contactPhone"
                className="text-white font-poppins mb-2"
              >
                Contact Phone:
              </label>
              <input
                type="text"
                name="contactPhone"
                value={singleContact?.phone}
                readOnly
                className="w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
              />
            </div>

            <div className="form-control">
              <label htmlFor="message" className="text-white font-poppins mb-2">
                Message:
              </label>
              <textarea
                name="message"
                value={singleContact?.comment}
                cols="30"
                readOnly
                rows="5"
                className="w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ViewContactModal;
