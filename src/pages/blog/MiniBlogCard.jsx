import { Link } from "react-router-dom";
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
        <Link to={`/blog/${blog?._id}`}>
          <h1 className="text-white text-base font-notoSans capitalize text-left hover:underline">
            {blog?.blogTitle?.slice(0, 15)}...
          </h1>
        </Link>
        <div className="text-zinc-400 flex items-start md:items-center gap-2">
          <SlCalender />
          <p className="text-xs">{formatDate(blog?.createdAt)}</p>
        </div>
      </div>
    </div>
  );
};

export default MiniBlogCard;
