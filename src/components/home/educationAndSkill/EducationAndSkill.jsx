import { useEffect, useRef, useState } from "react";
import ProgressBar from "../../ProgressBar";
import { useInView } from "react-intersection-observer";

const EducationAndSkill = () => {
  const [isInView, setIsInView] = useState(false);
  const progressBarRef = useRef();

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    setIsInView(inView);
  }, [inView]);
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
            <div className="flex flex-col gap-2">
              <div className="flex">
                <div className="flex items-center gap-1 px-4 py-2 border border-[#55e6a5] text-[#55e6a5] font-medium">
                  <h1>2010</h1> <span>-</span> <h1>2011</h1>
                </div>
              </div>
              <h1 className="text-2xl font-notoSans capitalize text-white text-left">
                secondary school certificate (SSC)
              </h1>
              <p className="text-left">
                I&apos;ve completed my secondary school certificate degree from
                Shashikar high school, Kalkini, Madaripur in Science Group in
                2010 - 2011 session.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex">
                <div className="flex items-center gap-1 px-4 py-2 border border-[#55e6a5] text-[#55e6a5] font-medium">
                  <h1>2011</h1> <span>-</span> <h1>2013</h1>
                </div>
              </div>
              <h1 className="text-2xl font-notoSans capitalize text-white text-left">
                higher secondary school certificate (HSC)
              </h1>
              <p className="text-left">
                I&apos;ve completed my higher secondary school certificate
                degree from Shahid Smriti college, Shashikar, Kalkini, Madaripur
                in Science Group in 2011 - 2013 session.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex">
                <div className="flex items-center gap-1 px-4 py-2 border border-[#55e6a5] text-[#55e6a5] font-medium">
                  <h1>2014</h1> <span>-</span> <h1>2019</h1>
                </div>
              </div>
              <h1 className="text-2xl font-notoSans capitalize text-white text-left">
                bachelor of science(BSc)
              </h1>
              <p className="text-left">
                I&apos;ve completed my Bachelor of Science degree from Daffodil
                International University, Dhaka, Bangladesh in Computer Science
                & Engineering in 2014 - 2019 session.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex">
                <div className="flex items-center gap-1 px-4 py-2 border border-[#55e6a5] text-[#55e6a5] font-medium">
                  <h1>2015</h1> <span>-</span> <h1>2018</h1>
                </div>
              </div>
              <h1 className="text-2xl font-notoSans capitalize text-white text-left">
                Graphic Designing
              </h1>
              <p className="text-left">
                In the time of my Bachelor&apos;s Degree I have learned Graphic
                Designing and do Freelance Job at Fiverr. Mainly there I have
                worked Logo Design, Banner Design, Personal ID Card Design,
                Brochure Design, Package Design etc.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex">
                <div className="flex items-center gap-1 px-4 py-2 border border-[#55e6a5] text-[#55e6a5] font-medium">
                  <h1>2022</h1> <span>-</span> <h1>2023</h1>
                </div>
              </div>
              <h1 className="text-2xl font-notoSans capitalize text-white text-left">
                MERN Stack Web Development
              </h1>
              <p className="text-left">
                In the time between 2022 - 2023 I developed my MERN Stack
                Development Skills by learning various new technologies From
                Programming Hero. The Course I have completed is named as
                Complete Web Development Course With Jhankar Mahbub.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-2 gap-10 mx-2 md:mx-0">
            <ProgressBar
              text="html5"
              value={95}
              isVisible={isInView}
              ref={progressBarRef}
            />
            <ProgressBar
              text="css3"
              value={90}
              isVisible={isInView}
              ref={progressBarRef}
            />
            <ProgressBar
              text="javascript"
              value={75}
              isVisible={isInView}
              ref={progressBarRef}
            />
            <ProgressBar
              text="bootstrap"
              value={90}
              isVisible={isInView}
              ref={progressBarRef}
            />
            <ProgressBar
              text="tailwind"
              value={95}
              isVisible={isInView}
              ref={progressBarRef}
            />
            <ProgressBar
              text="daisy ui"
              value={85}
              isVisible={isInView}
              ref={progressBarRef}
            />
            <ProgressBar
              text="headless ui"
              value={90}
              isVisible={isInView}
              ref={progressBarRef}
            />
            <ProgressBar
              text="react"
              value={70}
              isVisible={isInView}
              ref={progressBarRef}
            />
            <ProgressBar
              text="redux"
              value={60}
              isVisible={isInView}
              ref={progressBarRef}
            />
            <ProgressBar
              text="rtk query"
              value={50}
              isVisible={isInView}
              ref={progressBarRef}
            />
            <ProgressBar
              text="node.js"
              value={65}
              isVisible={isInView}
              ref={progressBarRef}
            />
            <ProgressBar
              text="express.js"
              value={65}
              isVisible={isInView}
              ref={progressBarRef}
            />

            <ProgressBar
              text="mongodb"
              value={80}
              isVisible={isInView}
              ref={progressBarRef}
            />
            <ProgressBar
              text="firebase"
              value={70}
              isVisible={isInView}
              ref={progressBarRef}
            />
            <ProgressBar
              text="photoshop"
              value={95}
              isVisible={isInView}
              ref={progressBarRef}
            />
            <ProgressBar
              text="illustrator"
              value={95}
              isVisible={isInView}
              ref={progressBarRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAndSkill;
