import blogImg from "../../assets/blog1.jpg";
import { SlCalender } from "react-icons/sl";

const MiniBlogCard = ({ blog }) => {
  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return dateObj.toLocaleDateString("en-GB", options);
  };
  return (
    <div className="flex items-center gap-4">
      <div>
        <img src={blog?.blogBanner} alt="Blog Image" className="w-20" />
      </div>
      <div>
        <h1 className="text-white text-lg font-notoSans capitalize text-left">
          {blog?.blogTitle}
        </h1>
        <div className="text-zinc-400 flex items-start md:items-center gap-2">
          <SlCalender />
          <p>{formatDate(blog?.createdAt)}</p>
        </div>
      </div>
    </div>
  );
};

export default MiniBlogCard;
