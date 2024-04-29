import { Link } from "react-router-dom";
import logo from "../../../assets/favicon.jpg";
import Button from "../Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSendEmailMutation } from "../../../redux/features/api/contact/contactApi";
import toast from "react-hot-toast";
import checkGif from "../../../assets/check.gif";
import { useGetAboutMeQuery } from "../../../redux/features/api/aboutMe/aboutMeApi";

const RightDrawer = () => {
  const [loading, setLoading] = useState(false);
  const [sentText, setSentText] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [sendEmail] = useSendEmailMutation();
  const { data: allAboutMe } = useGetAboutMeQuery();
  const aboutMe = allAboutMe?.[0];

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
      <div className="bg-[#141c27]">
        <div className="flex items-center gap-3 p-4">
          <img src={logo} alt="Website Logo" className="w-14" />
          <Link to="/dashboard">
            <h1 className="font-notoSans uppercase text-xl text-white">
              Shipan
            </h1>
          </Link>
        </div>
      </div>
      <div className="p-4 mt-7 mb-8">
        <h1 className="font-notoSans uppercase text-lg text-white">About Me</h1>
        <p className="mt-3 text-sm text-zinc-400">{aboutMe?.about}</p>
      </div>
      <div className="p-4">
        <h1 className="font-notoSans uppercase text-lg text-white mb-6">
          Get in touch
        </h1>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div className="form-control">
              {errors.name && (
                <p className="text-yellow-500 text-xs font-notoSans mb-2">
                  Name is Required **
                </p>
              )}

              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                placeholder="Your Name"
                className="border border-[#55e6a5] p-3 bg-[#141c27] placeholder-zinc-300 outline-none text-white"
              />
            </div>
            <div className="form-control">
              {errors.email && (
                <p className="text-yellow-500 text-xs font-notoSans mb-2">
                  Email is Required **
                </p>
              )}

              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="Your Email"
                className="border border-[#55e6a5] p-3 bg-[#141c27] placeholder-zinc-300 outline-none text-white"
              />
            </div>
            <div className="form-control">
              {errors.phone && (
                <p className="text-yellow-500 text-xs font-notoSans mb-2">
                  Phone is Required **
                </p>
              )}

              <input
                type="text"
                name="phone"
                {...register("phone", { required: true })}
                placeholder="Your Phone"
                className="border border-[#55e6a5] p-3 bg-[#141c27] placeholder-zinc-300 outline-none text-white"
              />
            </div>
            <div className="form-control">
              {errors.subject && (
                <p className="text-yellow-500 text-xs font-notoSans mb-2">
                  Subject is Required **
                </p>
              )}

              <input
                type="text"
                name="subject"
                {...register("subject", { required: true })}
                placeholder="Subject"
                className="border border-[#55e6a5] p-3 bg-[#141c27] placeholder-zinc-300 outline-none text-white"
              />
            </div>
            <div className="form-control">
              {errors.comment && (
                <p className="text-yellow-500 text-xs font-notoSans mb-2">
                  Comment is Required **
                </p>
              )}

              <textarea
                name="comment"
                {...register("comment", { required: true })}
                cols="20"
                rows="5"
                placeholder="Message..."
                className="border border-[#55e6a5] p-3 bg-[#141c27] placeholder-zinc-300 outline-none text-white"
              ></textarea>
            </div>
            <div>
              <Button
                text={
                  loading ? (
                    <div className="flex items-center justify-center gap-1">
                      <span className="loading loading-spinner loading-sm"></span>
                      <span>Sending...</span>
                    </div>
                  ) : sentText ? (
                    <div className="flex items-center justify-center gap-1">
                      <img src={checkGif} alt="Sent GIF" className="w-5 h-5" />
                      <span>Mail sent.</span>
                    </div>
                  ) : (
                    "Send Mail"
                  )
                }
                type="submit"
                className="flex items-center justify-center gap-1 capitalize w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RightDrawer;
