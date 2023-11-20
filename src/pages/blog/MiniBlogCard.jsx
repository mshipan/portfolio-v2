import blogImg from "../../assets/blog1.jpg";
import { SlCalender } from "react-icons/sl";

const MiniBlogCard = () => {
  return (
    <div className="flex items-center gap-4">
      <div>
        <img src={blogImg} alt="Blog Image" className="w-20" />
      </div>
      <div>
        <h1 className="text-white text-lg font-notoSans capitalize">
          Lorem ipsum dolor sit amet.
        </h1>
        <div className="text-zinc-400 flex items-start md:items-center gap-2">
          <SlCalender />
          <p>21 Nov 2023</p>
        </div>
      </div>
    </div>
  );
};

export default MiniBlogCard;
