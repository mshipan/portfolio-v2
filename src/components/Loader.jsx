import Lottie from "lottie-react";
import loader from "../assets/loader.json";

const Loader = () => {
  return (
    <div className=" bg-[#02050a] h-screen flex items-center justify-center">
      <Lottie animationData={loader} loop={true} />
    </div>
  );
};

export default Loader;
