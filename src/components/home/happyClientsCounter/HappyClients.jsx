import { HiOutlineUser } from "react-icons/hi2";
import { GoGear } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import Counter from "./Counter";
import { useGetAboutMeQuery } from "../../../redux/features/api/aboutMe/aboutMeApi";
import { useGetAllProjectsQuery } from "../../../redux/features/api/project/projectApi";
const HappyClients = () => {
  const { data: allAboutMe } = useGetAboutMeQuery();
  const aboutMe = allAboutMe?.[0];
  const { data: allProjects } = useGetAllProjectsQuery();

  return (
    <div className="bg-[#09101a] mt-32 mb-20 py-28">
      <div className="md:w-3/5 md:max-xl:w-[99%] w-full text-center md:text-left mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 md:max-xl:gap-10">
          <Counter
            number={allProjects?.length}
            text="happy clients"
            icon={<HiOutlineUser />}
          />
          <Counter
            number={allProjects?.length}
            text="project complete"
            icon={<GoGear />}
          />
          <Counter
            number={aboutMe?.experience}
            text="years of experience"
            icon={<SlCalender />}
          />
        </div>
      </div>
    </div>
  );
};

export default HappyClients;
