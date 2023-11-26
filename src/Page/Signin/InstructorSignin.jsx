import { useForm } from "react-hook-form";
import HelmetTitle from "../../Components/HelmetTitle/HelmetTitle";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import SocialSignIn from "../../Components/SocialSignIn/SocialSignIn";
import { Link } from "react-router-dom";
const InstructorSignin = () => {
  const [showpass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <section className="container mx-auto my-16">
      <HelmetTitle title={"SIGN IN"} />
      <div className="flex items-center">
        <div className="flex-1">
          <img src="https://i.ibb.co/mTnLMxW/mentor.png" alt="" />
        </div>
        <div className="flex-1 px-10">
          <div className="join join-vertical lg:join-horizontal">
            <Link to="/signin" className="btn join-item ">
              Student Sign in{" "}
            </Link>
            <Link to="/instructorSignin" className="btn join-item active">
              Instructor Sign in
            </Link>
          </div>
          <h2 className="text-4xl my-5">Please Sign in (Instructor)</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="form-control max-w-md">
              <label>
                <span className="label justify-start after:text-red-500 after:content-['*']">
                  Email
                </span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input input-bordered input-primary "
                placeholder="Email"
              />
              {errors.email && (
                <span className="text-red-600 text-sm">
                  Email field is required
                </span>
              )}
            </div>
            <div className="form-control max-w-md relative">
              <label>
                <span className="label justify-start after:text-red-500 after:content-['*']">
                  Password
                </span>
              </label>
              <input
                type={showpass ? "text" : "password"}
                {...register("password", { required: true })}
                className="input input-bordered input-primary "
                placeholder="Password"
              />
              <p
                className="absolute right-0 top-10 rounded-r-md select-none bg-gray-600 p-3"
                onClick={() => setShowPass(!showpass)}
              >
                {showpass ? (
                  <FaRegEye className="text-2xl text-white" />
                ) : (
                  <FaRegEyeSlash className="text-2xl text-white" />
                )}
              </p>
              {errors.email && (
                <span className="text-red-600 text-sm">
                  Password field is required
                </span>
              )}
              <p className="text-blue-600">Forgot Password ?</p>
            </div>

            <div className="form-control my-5">
              <input
                type="submit"
                className="btn btn-primary max-w-md"
                value="Sigin"
              />
            </div>
            <p>
              Don&apos;t have Account ? Please
              <Link to="/instructorsignup" className="text-blue-600">
                Sign up
              </Link>
              or
            </p>
            <SocialSignIn />
          </form>
        </div>
      </div>
    </section>
  );
};

export default InstructorSignin;
