import { Element } from "react-scroll";
import ProgressBar from "../../ProgressBar";

const Skills = () => {
  return (
    <Element name="educationAndSkill" className="grid grid-cols-2 gap-10">
      <ProgressBar value={30} />
      <ProgressBar value={50} />
      <ProgressBar value={85} />
    </Element>
  );
};

export default Skills;
