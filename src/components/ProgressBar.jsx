import { motion } from "framer-motion";

const ProgressBar = ({ text, value, isVisible, percentValue, className }) => {
  return (
    <div className={`bg-zinc-800 ${className}`}>
      <div className="pt-3 pb-5 pl-5 pr-10 flex items-center justify-between">
        <h1 className="font-poppins font-medium text-white uppercase">
          {text}
        </h1>
        {percentValue && <h1>{percentValue}%</h1>}
      </div>
      <motion.div
        className="h-1 bg-[#55e6a5]"
        initial={false}
        animate={{ width: isVisible ? `${value}%` : "0%" }}
        transition={{ duration: 2 }}
      ></motion.div>
    </div>
  );
};

export default ProgressBar;
