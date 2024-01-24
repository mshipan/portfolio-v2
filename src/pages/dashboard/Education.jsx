import { Link } from "react-router-dom";
import Button from "../../components/shared/Button";
import EducationCard from "../../components/dashboard/EducationCard";
import { useGetAllEducationsQuery } from "../../redux/features/api/education/educationApi";

const Education = () => {
  const {
    data: allEducations,
    isLoading,
    isError,
  } = useGetAllEducationsQuery();
  if (isLoading) {
    return <p className="font-poppins text-white text-lg">Loading...</p>;
  }
  if (isError) {
    return (
      <p className="font-poppins text-[#55e6a5] text-lg">
        Error Fetching Data...
      </p>
    );
  }
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
        {allEducations?.map((education) => (
          <EducationCard key={education._id} education={education} />
        ))}
      </div>
    </div>
  );
};

export default Education;
