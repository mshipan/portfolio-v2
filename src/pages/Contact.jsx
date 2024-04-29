import { useState } from "react";
import Button from "../components/shared/Button";
import PageBanner from "../components/shared/PageBanner";
import { useForm } from "react-hook-form";
import { useSendEmailMutation } from "../redux/features/api/contact/contactApi";
import toast from "react-hot-toast";
import checkGif from "../assets/check.gif";
import { useGetAboutMeQuery } from "../redux/features/api/aboutMe/aboutMeApi";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [sentText, setSentText] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { data: allAboutMe } = useGetAboutMeQuery();
  const aboutMe = allAboutMe?.[0];
  console.log(aboutMe);
  const [sendEmail] = useSendEmailMutation();

  const now = new Date();
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      data.createdAt = now;
      const result = await sendEmail(data);

      // Show toast based on response
      if (result.data) {
        reset();
        setLoading(false);
        toast.success("Mail sent successfully.");
        setSentText(true);
        setTimeout(() => {
          setSentText(false);
        }, 1500);
      } else {
        toast.error("Failed to send Mail.");
      }
    } catch (error) {
      setLoading(false);
      toast.error(`An error occurred: ${error}`);
    }
  };
  return (
    <div>
      <PageBanner title="Contact Me" subTitle="my contact info" />
      <div className="md:mt-32 mt-20 mb-20 md:w-3/5 w-full text-center md:text-left mx-auto">
        <div className="w-[96%] md:max-xl:w-full md:w-full mx-auto">
          <iframe
            src={aboutMe?.maplink}
            className="border-none w-full h-[20rem] md:max-xl:h-80 md:h-[35rem]"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-col-reverse md:max-xl:flex-col-reverse md:flex-row gap-10 justify-between mt-20 md:max-xl:w-full xl:max-2xl:w-full md:w-full w-[96%] mx-auto">
          <div className="py-20 px-10 bg-[#141c27] md:max-xl:w-full md:w-1/3 xl:max-2xl:w-full flex flex-col gap-5">
            <div className="bg-[#1d2837] hover:bg-[#141c27] border border-[#141c27] hover:border-[#55e6a5] transition-all ease-in duration-300 flex flex-col gap-4 px-5 py-4">
              <h1 className="text-white font-notoSans capitalize">phone:</h1>
              <p className="text-zinc-500 font-poppins">{aboutMe?.mobile}</p>
            </div>
            <div className="bg-[#1d2837] hover:bg-[#141c27] border border-[#141c27] hover:border-[#55e6a5] transition-all ease-in duration-300 flex flex-col gap-4 px-5 py-4">
              <h1 className="text-white font-notoSans capitalize">Email:</h1>
              <p className="text-zinc-500 font-poppins">{aboutMe?.email}</p>
            </div>
            <div className="bg-[#1d2837] hover:bg-[#141c27] border border-[#141c27] hover:border-[#55e6a5] transition-all ease-in duration-300 flex flex-col gap-4 px-5 py-4">
              <h1 className="text-white font-notoSans capitalize">website:</h1>
              <p className="text-zinc-500 font-poppins">{aboutMe?.website}</p>
            </div>
            <div className="bg-[#1d2837] hover:bg-[#141c27] border border-[#141c27] hover:border-[#55e6a5] transition-all ease-in duration-300 flex flex-col gap-4 px-5 py-4">
              <h1 className="text-white font-notoSans capitalize">address:</h1>
              <p className="text-zinc-500 font-poppins capitalize">
                {aboutMe?.address}
              </p>
            </div>
          </div>
          <div className="md:w-2/3 md:max-xl:w-full xl:max-2xl:w-full">
            <div className="flex flex-col gap-5">
              <h4 className="text-[#55e6a5] text-base font-poppins md:max-xl:text-center">
                Get in touch
              </h4>
              <h1 className="text-white text-4xl font-notoSans md:max-xl:text-center">
                If you have any project or need help. Feel free to Contact me...
              </h1>
              <div>
                {errors.name && (
                  <p className="text-yellow-500 text-xs font-notoSans">
                    Name is Required **
                  </p>
                )}
                {errors.email && (
                  <p className="text-yellow-500 text-xs font-notoSans">
                    Email is Required **
                  </p>
                )}
                {errors.phone && (
                  <p className="text-yellow-500 text-xs font-notoSans">
                    Phone is Required **
                  </p>
                )}
                {errors.subject && (
                  <p className="text-yellow-500 text-xs font-notoSans">
                    Subject is Required **
                  </p>
                )}
                {errors.comment && (
                  <p className="text-yellow-500 text-xs font-notoSans">
                    Comment is Required **
                  </p>
                )}
              </div>
              <div className="mt-10">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                      <input
                        type="text"
                        name="name"
                        {...register("name", { required: true })}
                        placeholder="Your Name"
                        className="py-3 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-white"
                      />
                    </div>
                    <div className="form-control">
                      <input
                        type="email"
                        name="email"
                        {...register("email", { required: true })}
                        placeholder="Your Email"
                        className="py-3 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-white"
                      />
                    </div>
                    <div className="form-control">
                      <input
                        type="text"
                        name="phone"
                        {...register("phone", { required: true })}
                        placeholder="Your Phone"
                        className="py-3 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-white"
                      />
                    </div>
                    <div className="form-control">
                      <input
                        type="text"
                        name="subject"
                        {...register("subject", { required: true })}
                        placeholder="Subject"
                        className="py-3 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-white"
                      />
                    </div>
                    <div className="form-control md:col-span-2">
                      <textarea
                        name="comment"
                        {...register("comment", { required: true })}
                        placeholder="Type your comments here..."
                        cols="30"
                        rows="10"
                        className="py-3 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-white"
                      ></textarea>
                    </div>
                  </div>
                  <Button
                    text={
                      loading ? (
                        <div className="flex items-center justify-center gap-1">
                          <span className="loading loading-spinner loading-sm"></span>
                          <span>Sending...</span>
                        </div>
                      ) : sentText ? (
                        <div className="flex items-center justify-center gap-1">
                          <img
                            src={checkGif}
                            alt="Sent GIF"
                            className="w-5 h-5"
                          />
                          <span>Mail sent.</span>
                        </div>
                      ) : (
                        "Send Mail"
                      )
                    }
                    type="submit"
                    className="flex items-center justify-center gap-1 capitalize w-full"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
