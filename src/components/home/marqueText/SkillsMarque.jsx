import Marquee from "react-fast-marquee";
import "./SkillsMarque.css";

const SkillsMarque = () => {
  return (
    <div className="bg-[#55e6a5] md:my-16 md:py-12 py-5 w-full text-center md:text-left mx-auto">
      <Marquee className="md:text-8xl text-5xl uppercase font-bold text-[#55e6a5] text-stroke overflow-hidden">
        * html * css * javascript * bootstrap * tailwind * react * redux toolkit
        * rtk query * tanstack query * node js * express js * mongo db *
        firebase * jwt * axios * adobe photoshop * adobe illustrator * graphic
        design *
      </Marquee>
    </div>
  );
};

export default SkillsMarque;
