import Marquee from "react-fast-marquee";
import "./SkillsMarque.css";
import { useGetAllSkillsQuery } from "../../../redux/features/api/skill/skillApi";

const SkillsMarque = () => {
  const { data: allSkills } = useGetAllSkillsQuery();

  return (
    <div className="bg-[#55e6a5] md:my-16 md:py-12 py-5 w-full text-center md:text-left mx-auto">
      <Marquee className="md:text-8xl text-5xl uppercase font-bold text-[#55e6a5] text-stroke overflow-hidden">
        {allSkills?.map((skill) => (
          <p key={skill?._id}>{skill?.skillName} *</p>
        ))}
      </Marquee>
    </div>
  );
};

export default SkillsMarque;
