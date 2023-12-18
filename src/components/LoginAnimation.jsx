import Lottie from "lottie-react";
import loginAnimation from "../assets/loginAnimation.json";

const LoginAnimation = () => {
  return (
    <div className="flex items-center justify-center h-96 w-96">
      <Lottie animationData={loginAnimation} loop={true} />
    </div>
  );
};

export default LoginAnimation;
