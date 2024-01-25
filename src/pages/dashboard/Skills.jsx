import { useEffect, useRef, useState } from "react";
import Button from "../../components/shared/Button";
import { useInView } from "react-intersection-observer";
import CreateSkillModal from "../../components/dashboard/CreateSkillModal";
import { useGetAllSkillsQuery } from "../../redux/features/api/skill/skillApi";
import SkillCard from "../../components/dashboard/SkillCard";

const Skills = () => {
  const [isInView, setIsInView] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const progressBarRef = useRef();

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    setIsInView(inView);
  }, [inView]);

  const { data: allSkills, isLoading, isError } = useGetAllSkillsQuery();

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="h-auto md:h-auto" ref={ref}>
      <div className="md:w-1/2">
        <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-full md:max-xl:w-full">
          <h1 className="text-2xl font-notoSans text-[#55e6a5]">Skills</h1>
          <div>
            <Button onClick={openModal} text="Create Skill" /> {/* modal */}
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-10 mx-2 md:mx-0">
            {allSkills?.map((skill) => (
              <SkillCard
                key={skill._id}
                isInView={isInView}
                progressBarRef={progressBarRef}
                skill={skill}
              />
            ))}
          </div>
        </div>
        <CreateSkillModal isModalOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </div>
  );
};

export default Skills;
