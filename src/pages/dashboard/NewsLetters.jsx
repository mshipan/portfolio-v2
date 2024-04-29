import React from "react";
import {
  useDeleteANewsLetterMutation,
  useGetAllNewsLettersQuery,
} from "../../redux/features/api/newsLetter/newsLetterApi";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Button from "../../components/shared/Button";

const NewsLetters = () => {
  const { data: allNewsLetters } = useGetAllNewsLettersQuery();
  const [deleteANewsLetter] = useDeleteANewsLetterMutation();
  const handleDeleteANewsLetter = async (_id) => {
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
          const result = await deleteANewsLetter({ id: _id });
          if (result.data.deletedCount > 0) {
            Swal.fire(
              "Deleted!",
              "This newsletter email has been deleted.",
              "success"
            );
          }
        } catch (error) {
          console.error("error deleting newsletter email", error);
        }
      }
    });
  };

  const handleCopyEmails = () => {
    const emails = allNewsLetters
      .map((newsLetter) => newsLetter.email)
      .join(", ");
    navigator.clipboard.writeText(emails);
    toast.success("All emails copied to clipboard.");
  };
  return (
    <div className="h-screen md:h-screen">
      <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-1/2 md:max-xl:w-full">
        <div className=" mb-5 w-full md:w-full md:max-xl:w-full">
          <h1 className="text-2xl font-notoSans text-[#55e6a5]">
            Newsletter Emails
          </h1>
        </div>
        <Button
          onClick={handleCopyEmails}
          text="Copy All Emails"
          className="border border-[#55e6a5] w-1/4 justify-center"
        />
      </div>
      <div className="w-full md:w-1/2 md:max-xl:w-full">
        <div>
          <div className="w-[60%] md:w-full overflow-x-auto">
            <table className="table border border-[#55e6a5]">
              <thead>
                <tr className="border border-[#55e6a5]">
                  <th className="font-notoSans text-white">Sl No.</th>

                  <th className="font-notoSans text-white">Email</th>
                  <th className="font-notoSans text-white">Action</th>
                </tr>
              </thead>
              <tbody>
                {allNewsLetters?.map((newsLetter, i) => (
                  <tr key={newsLetter?._id} className="border border-[#55e6a5]">
                    <td className="font-poppins text-slate-400 text-sm">
                      {i + 1}
                    </td>

                    <td className="font-poppins text-slate-400 text-xs">
                      {newsLetter?.email}
                    </td>

                    <td className="font-poppins text-slate-400 text-xs">
                      <button
                        onClick={() => handleDeleteANewsLetter(newsLetter?._id)}
                        className=" p-1 bg-[#141c27] hover:bg-[#55e6a5] text-[#55e6a5] hover:text-black border border-[#55e6a5]"
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetters;
