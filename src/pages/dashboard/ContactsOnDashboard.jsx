import { useState } from "react";
import {
  useDeleteAContactMutation,
  useGetAllContactsQuery,
  useUpdateIsNewStatusOnContactMutation,
} from "../../redux/features/api/contact/contactApi";
import ViewContactModal from "../../components/dashboard/ViewContactModal";
import Swal from "sweetalert2";

const ContactsOnDashboard = () => {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isContactModalClose, setIsContactModalClose] = useState(false);

  const { data: allContacts } = useGetAllContactsQuery();
  const [deleteAContact] = useDeleteAContactMutation();
  const [updateIsNewStatus] = useUpdateIsNewStatusOnContactMutation();

  const markContactAsViewed = async (contactId) => {
    try {
      await updateIsNewStatus({ id: contactId, isNew: false });
    } catch (error) {
      throw new Error("Failed to mark contact as viewed");
    }
  };

  const openContactModal = async (contactId) => {
    setIsContactModalOpen(true);
    setSelectedContactId(contactId);
    try {
      await markContactAsViewed(contactId);
    } catch (error) {
      console.error("Error marking contact as viewed:", error);
    }
  };
  const closeContactModal = () => {
    setIsContactModalClose(true);
    setSelectedContactId(null);
  };
  const handleDeleteAContact = async (_id) => {
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
          const result = await deleteAContact({ id: _id });
          if (result.data.deletedCount > 0) {
            Swal.fire("Deleted!", "This contact has been deleted.", "success");
          }
        } catch (error) {
          console.error("error deleting contact", error);
        }
      }
    });
  };

  return (
    <div className="h-auto md:h-screen">
      <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-1/2 md:max-xl:w-full">
        <div className=" mb-5 w-full md:w-full md:max-xl:w-full">
          <h1 className="text-2xl font-notoSans text-[#55e6a5]">Contacts</h1>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:max-xl:w-full">
        <div>
          <div className="w-1/3 md:w-full overflow-x-auto">
            <table className="table border border-[#55e6a5]">
              <thead>
                <tr className="border border-[#55e6a5]">
                  <th className="font-notoSans text-white">Sl No.</th>
                  <th className="font-notoSans text-white">Subject</th>
                  <th className="font-notoSans text-white">Name</th>
                  <th className="font-notoSans text-white">Email</th>
                  <th className="font-notoSans text-white">Phone</th>
                  <th className="font-notoSans text-white">Message</th>
                  <th className="font-notoSans text-white">Action</th>
                </tr>
              </thead>
              <tbody>
                {allContacts?.map((contact, i) => (
                  <tr
                    key={contact?._id}
                    className={`border border-[#55e6a5] ${
                      contact.isNew ? "font-bold text-white" : "text-slate-300"
                    }`}
                  >
                    <td className="font-poppins  text-sm">{i + 1}</td>
                    <td className="font-poppins text-xs">
                      {contact?.subject?.slice(0, 80)}...
                    </td>
                    <td className="font-poppins text-xs">
                      {contact?.name?.slice(0, 5)}...
                    </td>
                    <td className="font-poppins text-xs">
                      {contact?.email?.slice(0, 8)}...
                    </td>
                    <td className="font-poppins text-xs">{contact?.phone}</td>
                    <td className="font-poppins text-xs">
                      {contact?.comment?.slice(0, 10)}...
                    </td>
                    <td className="font-poppins text-xs">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => openContactModal(contact?._id)}
                          className=" p-1 bg-[#55e6a5] hover:bg-[#141c27] text-black hover:text-[#55e6a5] border border-[#55e6a5]"
                        >
                          view
                        </button>
                        <button
                          onClick={() => handleDeleteAContact(contact?._id)}
                          className=" p-1 bg-[#141c27] hover:bg-[#55e6a5] text-[#55e6a5] hover:text-black border border-[#55e6a5]"
                        >
                          delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {selectedContactId && (
        <ViewContactModal
          isContactModalOpen={isContactModalOpen}
          isContactModalClose={isContactModalClose}
          contactId={selectedContactId}
          onClose={closeContactModal}
        />
      )}
    </div>
  );
};

export default ContactsOnDashboard;
