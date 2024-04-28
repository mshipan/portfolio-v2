import Button from "../Button";
import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useForm } from "react-hook-form";
import { useAddANewsLetterMutation } from "../../../redux/features/api/newsLetter/newsLetterApi";
import Swal from "sweetalert2";
import { useState } from "react";
import toast from "react-hot-toast";
import checkGif from "../../../assets/check.gif";

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [sentText, setSentText] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [addANewsLetter] = useAddANewsLetterMutation();

  const now = new Date();
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      data.createdAt = now;
      const result = await addANewsLetter(data);

      if (result.data) {
        Swal.fire({
          title: "Successfully Subscribed for Newsletter!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
        reset();
        setLoading(false);
        setSentText(true);
        setTimeout(() => {
          setSentText(false);
        }, 1500);
      } else {
        Swal.fire({
          title: `${result.error.data.message}!`,
          html: `
                <p style="font-size: 24px; margin-bottom: 5px; color: #55e6a5;">Please subscribe by a new one.</p>
                <p style="font-size: 20px;">Press OK to continue</p>
                `,
          icon: "warning",
          confirmButtonText: "OK",
        });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <div className="pt-20">
      <div className="flex flex-col items-center gap-6 footerBg py-16">
        <h1 className="text-[#55e6a5] text-2xl font-light font-poppins capitalize">
          get latest updates
        </h1>
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-white text-5xl font-bold font-notoSans capitalize text-center md:text-left">
            subscribe for newsletter
          </h1>
          {errors.email && (
            <p className="text-yellow-500 text-sm font-notoSans">
              ** The Email for Newsletter Subscription is Required. **
            </p>
          )}
          <div className="w-[96%] md:w-full mx-auto md:border md:border-[#55e6a5]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col md:flex-row items-center w-full gap-4 md:gap-0"
            >
              <div className="form-control w-full md:w-3/4 border border-[#55e6a5] md:border-none">
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email"
                  className="py-3 pl-4 outline-none placeholder:text-white text-white bg-[#141c27]"
                />
              </div>
              <Button
                text={
                  loading ? (
                    <div className="flex items-center justify-center gap-1">
                      <span className="loading loading-spinner loading-sm"></span>
                      <span>Subscribing...</span>
                    </div>
                  ) : sentText ? (
                    <div className="flex items-center justify-center gap-1">
                      <img src={checkGif} alt="Sent GIF" className="w-5 h-5" />
                      <span>Subscribed.</span>
                    </div>
                  ) : (
                    "subscribe now"
                  )
                }
                type="submit"
                className="flex items-center gap-1 capitalize md:w-1/4"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:max-xl:flex-col items-center justify-center md:gap-8 gap-4 my-16">
        <div className="flex items-center gap-4">
          <div className="p-5 border border-zinc-800 hover:border-white rounded-full text-white hover:text-[#02050a] hover:bg-white transition-all ease-in-out duration-500">
            <FaPhoneAlt />
          </div>
          <h1 className="font-poppins text-lg md:text-2xl text-white">
            +88 01622 543390
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="p-5 border border-zinc-800 hover:border-white rounded-full text-white hover:text-[#02050a] hover:bg-white transition-all ease-in-out duration-500">
            <IoIosMail />
          </div>
          <h1 className="font-poppins text-lg md:text-2xl text-white">
            shipanmallik95@gmail.com
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <Link to="https://github.com/mshipan">
            <div className="p-5 border border-zinc-800 hover:border-white rounded-full text-white hover:text-[#02050a] hover:bg-white transition-all ease-in-out duration-500">
              <FaGithub />
            </div>
          </Link>
          <Link to="https://www.facebook.com/mallik.shipan">
            <div className="p-5 border border-zinc-800 hover:border-white rounded-full text-white hover:text-[#02050a] hover:bg-white transition-all ease-in-out duration-500">
              <FaFacebookF />
            </div>
          </Link>
          <Link to="https://www.linkedin.com/in/shipan-mallik/">
            <div className="p-5 border border-zinc-800 hover:border-white rounded-full text-white hover:text-[#02050a] hover:bg-white transition-all ease-in-out duration-500">
              <FaLinkedin />
            </div>
          </Link>
        </div>
      </div>
      <div className="border-t border-zinc-800">
        <div className="py-2">
          <div className="md:w-3/5 w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-0">
            <p className="text-sm text-zinc-500 font-poppins">
              &copy; 2023 All Right Reserved by
              <Link to="/">
                <span className="text-white"> Shipan Mallik</span>
              </Link>
            </p>
            <div>
              <Link to="/">
                <img src={logo} alt="website logo" className="w-28" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
