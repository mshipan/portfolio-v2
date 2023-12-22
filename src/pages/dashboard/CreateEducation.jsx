import Button from "../../components/shared/Button";
import { Link } from "react-router-dom";

const CreateEducation = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-1/2 md:max-xl:w-full">
        <h1 className="text-2xl font-notoSans text-[#55e6a5]">
          Create Education Info
        </h1>
        <div>
          <Link to="/dashboard/update-education">
            <Button text="Add Education" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-5">
          <div className="form-control">
            <label
              htmlFor="title"
              className="text-lg text-white font-notoSans mb-2"
            >
              Title:
            </label>
            <input
              type="text"
              name="title"
              value="Secondary School Certificate"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="startYear"
              className="text-lg text-white font-notoSans mb-2"
            >
              Start Year:
            </label>
            <input
              type="text"
              name="startYear"
              value="2010"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="endYear"
              className="text-lg text-white font-notoSans mb-2"
            >
              End Year:
            </label>
            <input
              type="text"
              name="endYear"
              value="2011"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="description"
              className="text-lg text-white font-notoSans mb-2"
            >
              Description:
            </label>
            <textarea
              name="description"
              cols="30"
              rows="5"
              value="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam pariatur doloribus alias aliquam sunt accusamus asperiores recusandae rem ea ipsum!"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEducation;
