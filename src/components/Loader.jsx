import Lottie from "lottie-react";
import loader from "../assets/loader.json";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ y: "0%" }}
      animate={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 5, ease: "easeOut" }}
      exit={{ y: "100%" }}
      className=" bg-[#02050a] h-screen flex items-center justify-center"
    >
      <Lottie animationData={loader} loop={true} />
    </motion.div>
  );
};

export default Loader;
