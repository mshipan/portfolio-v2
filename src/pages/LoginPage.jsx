import React from "react";
import LoginAnimation from "../components/LoginAnimation";
import Button from "../components/shared/Button";

const LoginPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex items-center justify-center">
        <LoginAnimation />
        <div>
          <h1 className="text-4xl font-notoSans text-white mb-5">
            Please login
          </h1>
          <div>
            <form className="flex flex-col items-start gap-3 ">
              <div className="form-control w-full">
                <label htmlFor="email" className="text-[#55e6a5]">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email..."
                  className="w-full py-3 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-white"
                />
              </div>
              <div className="form-control w-full">
                <label htmlFor="password" className="text-[#55e6a5]">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password..."
                  className="py-3 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-white"
                />
              </div>
              <div className="mt-4">
                <Button type="submit" text="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
