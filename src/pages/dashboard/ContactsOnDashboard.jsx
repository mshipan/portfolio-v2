const ContactsOnDashboard = () => {
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
                <tr className="border border-[#55e6a5]">
                  <td className="font-poppins text-slate-400 text-sm">1</td>
                  <td className="font-poppins text-slate-400 text-xs">
                    I have a query...
                  </td>
                  <td className="font-poppins text-slate-400 text-xs">
                    Shipan...
                  </td>
                  <td className="font-poppins text-slate-400 text-xs">
                    mshipan65...
                  </td>
                  <td className="font-poppins text-slate-400">01622543390</td>
                  <td className="font-poppins text-slate-400 text-xs">
                    Lorem ipsum...
                  </td>
                  <td className="font-poppins text-slate-400 text-xs">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() =>
                          document.getElementById("my_modal_5").showModal()
                        }
                        className=" p-1 bg-[#55e6a5] hover:bg-[#141c27] text-black hover:text-[#55e6a5] border border-[#55e6a5]"
                      >
                        view
                      </button>
                      <button className=" p-1 bg-[#141c27] hover:bg-[#55e6a5] text-[#55e6a5] hover:text-black border border-[#55e6a5]">
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
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
                  <label
                    htmlFor="contactName"
                    className="text-white font-poppins mb-2"
                  >
                    Contact Name:
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    readOnly
                    className="w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                    value="Shipan Mallik"
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
                    value="mshipan657@gmail.com"
                  />
                </div>
              </div>

              <div className="form-control">
                <label
                  htmlFor="subject"
                  className="text-white font-poppins mb-2"
                >
                  Subject:
                </label>
                <input
                  type="text"
                  name="subject"
                  readOnly
                  className="w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                  value="I have a query"
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
                  readOnly
                  className="w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                  value="01622543390"
                />
              </div>

              <div className="form-control">
                <label
                  htmlFor="message"
                  className="text-white font-poppins mb-2"
                >
                  Message:
                </label>
                <textarea
                  name="message"
                  cols="30"
                  readOnly
                  rows="5"
                  className="w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                  value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi vel vitae et obcaecati molestiae laudantium esse quisquam quibusdam corporis. Quisquam."
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ContactsOnDashboard;
