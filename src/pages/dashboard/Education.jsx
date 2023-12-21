import { PiCertificateLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import Button from "../../components/shared/Button";
import { CiEdit, CiTrash } from "react-icons/ci";

const Education = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-1/2 md:max-xl:w-full">
        <h1 className="text-2xl font-notoSans text-[#55e6a5]">
          Education Info
        </h1>
        <div>
          <Link to="/dashboard/create-education">
            <Button text="Create Education" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="relative ml-5">
          <div className="border-l-2 border-[#55e6a5] px-8 pb-6">
            <div className="flex items-center gap-20">
              <h1 className="text-lg font-poppins text-white font-bold">
                Higher Secondary School Certificate (HSC)
              </h1>
              <div className="flex items-center gap-3">
                <CiEdit size={25} className="text-[#55e6a5]" title="Edit" />
                <CiTrash size={25} className="text-[#55e6a5]" title="Delete" />
              </div>
            </div>
            <div className="text-[#55e6a5] text-sm">
              <p>
                <span>2010</span> - <span>2011</span>
              </p>
            </div>
            <p className="text-white max-w-2xl mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              pariatur doloribus alias aliquam sunt accusamus asperiores
              recusandae rem ea ipsum!
            </p>
          </div>
          <div className="absolute top-0 -ml-3.5 border-2 border-[#55e6a5] p-1 rounded-full bg-[#02050a]">
            <PiCertificateLight className="text-[#55e6a5]" />
          </div>
        </div>
        <div className="relative ml-5">
          <div className="border-l-2 border-[#55e6a5] px-8 pb-6">
            <div className="flex items-center gap-20">
              <h1 className="text-lg font-poppins text-white font-bold">
                Secondary School Certificate (SSC)
              </h1>
              <div className="flex items-center gap-3">
                <CiEdit size={25} className="text-[#55e6a5]" title="Edit" />
                <CiTrash size={25} className="text-[#55e6a5]" title="Delete" />
              </div>
            </div>

            <div className="text-[#55e6a5] text-sm">
              <p>
                <span>2010</span> - <span>2011</span>
              </p>
            </div>
            <p className="text-white max-w-2xl mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              pariatur doloribus alias aliquam sunt accusamus asperiores
              recusandae rem ea ipsum!
            </p>
          </div>
          <div className="absolute top-0 -ml-3.5 border-2 border-[#55e6a5] p-1 rounded-full bg-[#02050a]">
            <PiCertificateLight className="text-[#55e6a5]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
