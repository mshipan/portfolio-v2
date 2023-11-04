import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { PiMinusLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const FollowMe = () => {
  return (
    <div className="fixed bottom-36 right-1 z-40">
      <div className="flex items-center gap-3 transform rotate-90">
        <h1 className="text-zinc-400 capitalize hover:text-white transition-all ease-out duration-500">
          Follow me
        </h1>
        <PiMinusLight />
        <div className="flex items-center gap-3">
          <Link to="https://github.com/mshipan">
            <BsGithub className="transform -rotate-90 hover:text-white transition-all ease-out duration-500" />
          </Link>
          <Link to="https://twitter.com/mshipan657">
            <BsTwitter className="transform -rotate-90 hover:text-white transition-all ease-out duration-500" />
          </Link>
          <Link to="https://www.linkedin.com/in/shipan-mallik/">
            <BsLinkedin className="transform -rotate-90 hover:text-white transition-all ease-out duration-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FollowMe;
