import { Link } from "react-router-dom";
import Button from "../../components/shared/Button";
import EducationCard from "../../components/dashboard/EducationCard";

const Education = () => {
  return (
    <div className="h-auto md:h-screen">
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
        <EducationCard />
        <EducationCard />
      </div>
    </div>
  );
};

export default Education;
