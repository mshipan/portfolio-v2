import Button from "../../components/shared/Button";
import webdev from "../../assets/webdev.png";

const Services = () => {
  return (
    <div className="h-auto md:h-screen">
      <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-1/2 md:max-xl:w-full">
        <h1 className="text-2xl font-notoSans text-[#55e6a5]">Services</h1>
        <div>
          <Button
            text="Create Services"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 md:max-xl:w-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-16 mt-16">
        <div className="border border-[#55e6a5] rounded-md md:w-80 relative flex flex-col items-end gap-4">
          <div className="flex items-center justify-center w-full h-16 absolute -top-8 right-0">
            <div className="w-16 bg-[#02050a] p-2">
              <img src={webdev} alt="Service Image" />
            </div>
          </div>

          <div className="flex flex-col items-center mt-10 px-3">
            <h1 className="font-notoSans text-lg text-white">HTML5</h1>
            <p className="font-poppins text-sm text-slate-400 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at,
              vel impedit maxime accusamus molestiae alias labore necessitatibus
              quas ab quisquam vitae adipisci. Architecto, nemo?
            </p>
          </div>

          <div className="px-3 flex items-center gap-2 mb-3">
            <button
              className=" p-1 bg-[#55e6a5] hover:bg-[#141c27] text-black hover:text-[#55e6a5] border border-[#55e6a5]"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Edit
            </button>
            <button className=" p-1 bg-[#141c27] hover:bg-[#55e6a5] text-[#55e6a5] hover:text-black border border-[#55e6a5]">
              Delete
            </button>
          </div>
        </div>

        <div className="border border-[#55e6a5] rounded-md md:w-80 relative flex flex-col items-end gap-4">
          <div className="flex items-center justify-center w-full h-16 absolute -top-8 right-0">
            <div className="w-16 bg-[#02050a] p-2">
              <img src={webdev} alt="Service Image" />
            </div>
          </div>

          <div className="flex flex-col items-center mt-10 px-3">
            <h1 className="font-notoSans text-lg text-white">HTML5</h1>
            <p className="font-poppins text-sm text-slate-400 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at,
              vel impedit maxime accusamus molestiae alias labore necessitatibus
              quas ab quisquam vitae adipisci. Architecto, nemo?
            </p>
          </div>

          <div className="px-3 flex items-center gap-2 mb-3">
            <button
              className=" p-1 bg-[#55e6a5] hover:bg-[#141c27] text-black hover:text-[#55e6a5] border border-[#55e6a5]"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Edit
            </button>
            <button className=" p-1 bg-[#141c27] hover:bg-[#55e6a5] text-[#55e6a5] hover:text-black border border-[#55e6a5]">
              Delete
            </button>
          </div>
        </div>

        <div className="border border-[#55e6a5] rounded-md md:w-80 relative flex flex-col items-end gap-4">
          <div className="flex items-center justify-center w-full h-16 absolute -top-8 right-0">
            <div className="w-16 bg-[#02050a] p-2">
              <img src={webdev} alt="Service Image" />
            </div>
          </div>

          <div className="flex flex-col items-center mt-10 px-3">
            <h1 className="font-notoSans text-lg text-white">HTML5</h1>
            <p className="font-poppins text-sm text-slate-400 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at,
              vel impedit maxime accusamus molestiae alias labore necessitatibus
              quas ab quisquam vitae adipisci. Architecto, nemo?
            </p>
          </div>

          <div className="px-3 flex items-center gap-2 mb-3">
            <button
              className=" p-1 bg-[#55e6a5] hover:bg-[#141c27] text-black hover:text-[#55e6a5] border border-[#55e6a5]"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Edit
            </button>
            <button className=" p-1 bg-[#141c27] hover:bg-[#55e6a5] text-[#55e6a5] hover:text-black border border-[#55e6a5]">
              Delete
            </button>
          </div>
        </div>
      </div>
      <dialog id="my_modal_4" className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg font-notoSans mb-5 text-[#55e6a5]">
            Create Service
          </h3>
          <div>
            <form className="flex flex-col gap-4">
              <div className="form-control">
                <label
                  htmlFor="serviceTitle"
                  className="text-white font-poppins mb-2"
                >
                  Service Title:
                </label>
                <input
                  type="text"
                  name="serviceTitle"
                  readOnly
                  className="w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                  value="Web development"
                />
              </div>

              <div className="form-control">
                <label
                  htmlFor="serviceImage"
                  className="text-white font-poppins mb-2"
                >
                  Service Image:
                </label>
                <input
                  type="text"
                  name="serviceImage"
                  readOnly
                  className="w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                  value="Link"
                />
              </div>

              <div className="form-control">
                <label
                  htmlFor="serviceDescription"
                  className="text-white font-poppins mb-2"
                >
                  Service Description:
                </label>
                <textarea
                  name="serviceDescription"
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

      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-4 font-notoSans text-[#55e6a5]">
            Service Details
          </h3>
          <div>
            <form className="flex flex-col gap-4">
              <div className="form-control">
                <label
                  htmlFor="serviceTitle"
                  className="text-white font-poppins mb-2"
                >
                  Service Title:
                </label>
                <input
                  type="text"
                  name="serviceTitle"
                  readOnly
                  className="w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                  value="Web development"
                />
              </div>

              <div className="form-control">
                <label
                  htmlFor="serviceImage"
                  className="text-white font-poppins mb-2"
                >
                  Service Image:
                </label>
                <input
                  type="text"
                  name="serviceImage"
                  readOnly
                  className="w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                  value="Link"
                />
              </div>

              <div className="form-control">
                <label
                  htmlFor="serviceDescription"
                  className="text-white font-poppins mb-2"
                >
                  Service Description:
                </label>
                <textarea
                  name="serviceDescription"
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

export default Services;
