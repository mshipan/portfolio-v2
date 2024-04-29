import { useEffect, useRef, useState } from "react";
import ProgressBar from "../../ProgressBar";
import { useInView } from "react-intersection-observer";
import { useGetAllEducationsQuery } from "../../../redux/features/api/education/educationApi";
import { useGetAllSkillsQuery } from "../../../redux/features/api/skill/skillApi";

const EducationAndSkill = () => {
  const [isInView, setIsInView] = useState(false);
  const progressBarRef = useRef();

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    setIsInView(inView);
  }, [inView]);

  const { data: allEducations } = useGetAllEducationsQuery();
  const { data: allSkills } = useGetAllSkillsQuery();

  return (
    <div
      className="mt-32 mb-20 md:w-3/5 w-full text-center md:text-left mx-auto"
      ref={ref}
    >
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-[#55e6a5] text-2xl font-light font-poppins mb-10">
          Education & Skills
        </h1>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:max-xl:grid-cols-1 gap-10 mx-2 md:mx-0">
            {allEducations?.map((education) => (
              <div key={education?._id} className="flex flex-col gap-2">
                <div className="flex">
                  <div className="flex items-center gap-1 px-4 py-2 border border-[#55e6a5] text-[#55e6a5] font-medium">
                    <h1>{education?.startYear}</h1> <span>-</span>{" "}
                    <h1>{education?.endYear}</h1>
                  </div>
                </div>
                <h1 className="text-2xl font-notoSans capitalize text-white text-left">
                  {education?.title}
                </h1>
                <p className="text-left text-slate-400">
                  {education?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-2 gap-10 mx-2 md:mx-0">
            {allSkills?.map((skill) => (
              <ProgressBar
                key={skill?._id}
                text={skill?.skillName}
                value={skill?.skillPercentage}
                isVisible={isInView}
                ref={progressBarRef}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAndSkill;
