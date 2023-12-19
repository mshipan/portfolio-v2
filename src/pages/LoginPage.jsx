import { useContext, useState } from "react";
import LoginAnimation from "../components/LoginAnimation";
import Button from "../components/shared/Button";
import { AuthContext } from "../providers/AuthProviders";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Admin logged in successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex items-center justify-center">
        <LoginAnimation />
        <div>
          <h1 className="text-4xl font-notoSans text-white mb-5">
            Please login
          </h1>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-start gap-3 "
            >
              <div className="form-control w-full">
                <label htmlFor="email" className="text-[#55e6a5]">
                  Email:
                  {errors.email && (
                    <span className="text-red-500">Email is required</span>
                  )}
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email..."
                  className="w-full py-3 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-white"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="form-control w-full">
                <label htmlFor="password" className="text-[#55e6a5]">
                  Password:
                  {errors.password && (
                    <span className="text-red-500">
                      {errors.password.type === "required" &&
                        "Password is required"}
                    </span>
                  )}
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password..."
                  className="py-3 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-white"
                  {...register("password", { required: true })}
                />
              </div>
              <div className="mt-4">
                <Button type="submit" text="Login" />
              </div>
              <p style={{ color: "red" }}>{errorMessage}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
