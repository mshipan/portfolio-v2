import CountUp from "react-countup";

const Counter = ({ number, text, icon }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="p-3 border border-zinc-500 rounded-xl text-2xl md:max-xl:text-xl text-white">
        {icon}
      </div>
      <div className="flex flex-col gap-3">
        <CountUp
          duration={10}
          className="text-4xl md:max-xl:text-2xl font-poppins font-light text-white"
          end={number}
        />

        <p className="font-poppins capitalize text-zinc-600">{text}</p>
      </div>
    </div>
  );
};

export default Counter;
