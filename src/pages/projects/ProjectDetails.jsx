import PageBanner from "../../components/shared/PageBanner";
import projectBannerImg from "../../assets/projectBanner.jpg";
import { TfiCheck } from "react-icons/tfi";
import { LuClock } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/shared/Button";
import { useGetProjectByIdQuery } from "../../redux/features/api/project/projectApi";

const ProjectDetails = () => {
  const { id } = useParams();
  const { data: singleProject } = useGetProjectByIdQuery(id);

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return dateObj.toLocaleDateString("en-GB", options);
  };
  return (
    <div>
      <PageBanner
        title="Project Details"
        subTitle={singleProject?.projectTitle}
      />
      <div className="md:mt-32 mt-20 mb-20 md:w-3/5 w-full text-center md:text-left mx-auto ">
        <div className="flex flex-col gap-10 w-[98%] md:w-full mx-auto">
          <div>
            <img
              src={singleProject?.projectBanner}
              alt="Project Banner"
              className="w-full h-60 md:h-[40rem] md:max-xl:h-80 rounded-xl"
            />
          </div>
          <div className="flex flex-col md:flex-row md:max-xl:flex-col gap-10">
            <div className="flex flex-col gap-5 md:w-3/4 md:max-xl:w-full">
              <div className="flex flex-col gap-5">
                <h1 className="text-lg font-poppins font-bold text-[#55e6a5]">
                  1. Project Overview
                </h1>
                <div className="flex flex-col gap-3">
                  <h1 className="text-4xl font-notoSans text-white">
                    Project Description
                  </h1>
                  <p className="text-sm text-zinc-300 font-poppins">
                    {singleProject?.projectDescription}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-4xl font-notoSans text-white">Goals</h1>
                  <p className="text-sm text-zinc-300 font-poppins">
                    {singleProject?.projectGoals}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-lg font-poppins font-bold text-[#55e6a5]">
                  2. Technologies Used
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                  {singleProject?.technologyUsed?.map((techUse, i) => (
                    <div key={i} className="py-3 px-2 border border-[#55e6a5]">
                      <p className="text-white font-poppins capitalize text-center">
                        {techUse?.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-lg font-poppins font-bold text-[#55e6a5]">
                  3. Features
                </h1>
                <div className="flex flex-col gap-3">
                  {singleProject?.projectFeatures?.map((pFeature, i) => (
                    <div key={i} className="flex md:items-center gap-3">
                      <TfiCheck className="text-[#55e6a5]" />
                      <p className="font-poppins text-sm text-zinc-300 text-left">
                        {pFeature.feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-lg font-poppins font-bold text-[#55e6a5]">
                  4. conclusion
                </h1>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-zinc-300 font-poppins">
                    {singleProject?.conclusion}
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/4 md:max-xl:w-full flex flex-col gap-8">
              <div className="flex flex-col gap-3 bg-zinc-800 py-8 px-5">
                <div className="flex flex-col items-center md:items-start gap-2 bg-zinc-700 py-2 px-5">
                  <div>
                    <h1 className="text-lg font-poppins font-bold text-[#55e6a5]">
                      Project Duration
                    </h1>
                    <p className="text-white inline-flex items-center gap-2">
                      <LuClock className="text-lg" />
                      {singleProject?.projectDuration}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-zinc-400 inline-flex items-center gap-2">
                        <SlCalender
                          className="text-white text-lg
                      "
                        />
                        Start Date: {formatDate(singleProject?.startDate)}
                      </h1>
                      <h1 className="text-zinc-400 inline-flex items-center gap-2">
                        <SlCalender
                          className="text-white text-lg
                      "
                        />
                        End Date: {formatDate(singleProject?.endDate)}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 bg-zinc-700 py-2 px-5">
                  <div>
                    <h1 className="text-lg font-poppins font-bold text-[#55e6a5]">
                      Live Link
                    </h1>
                    <Link to={singleProject?.liveLink}>
                      <p className="text-white inline-flex items-center gap-2 hover:text-[#55e6a5] underline italic">
                        go to the live link
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-2 bg-zinc-700 py-2 px-5">
                  <div>
                    <h1 className="text-lg font-poppins font-bold text-[#55e6a5]">
                      Github
                    </h1>
                    <div className="flex flex-col gap-2">
                      <div>
                        <div>
                          <h1 className="text-white font-poppins font-semibold">
                            Client
                          </h1>
                        </div>
                        <Link to={singleProject?.githubClient}>
                          <p className="text-white inline-flex items-center gap-2 hover:text-[#55e6a5] underline italic">
                            go to the github-client link
                          </p>
                        </Link>
                      </div>
                      <div>
                        <div>
                          <h1 className="text-white font-poppins font-semibold">
                            Server
                          </h1>
                        </div>
                        <Link to={singleProject?.githubServer}>
                          <p className="text-white inline-flex items-center gap-2 hover:text-[#55e6a5] underline italic">
                            go to the github-server link
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-800 py-8 px-5">
                <div className="bg-zinc-700 py-6 px-5 flex flex-col items-center md:items-start">
                  <p className="text-[#55e6a5] font-semibold">Quick Contact</p>
                  <p className="text-xl text-white font-bold font-notoSans">
                    Need This Kind of Project!
                  </p>
                  <p className="font-poppins text-sm mt-5 mb-3 text-gray-400">
                    Contact me at my address or click the contact button.
                    I&apos;m always there for you 24/7.
                  </p>
                  <div>
                    <Link to="/contact">
                      <Button
                        text="contact"
                        className="flex items-center gap-1 capitalize"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
