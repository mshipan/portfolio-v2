import { HiOutlineUser } from "react-icons/hi2";
import { GoGear } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import Counter from "./Counter";
const HappyClients = () => {
  return (
    <div className="bg-[#09101a] mt-32 mb-20 py-28">
      <div className="md:w-3/5 md:max-xl:w-[99%] w-full text-center md:text-left mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 md:max-xl:gap-10">
          <Counter number={258} text="happy clients" icon={<HiOutlineUser />} />
          <Counter number={590} text="project complete" icon={<GoGear />} />
          <Counter
            number={2}
            text="years of experience"
            icon={<SlCalender />}
          />
        </div>
      </div>
    </div>
  );
};

export default HappyClients;
