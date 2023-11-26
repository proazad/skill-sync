import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HelmetTitle from "../../Components/HelmetTitle/HelmetTitle";
import SocialSignIn from "../../Components/SocialSignIn/SocialSignIn";
const InstructorSignup = () => {
  const [showpass, setShowPass] = useState(false);
  const [showpassc, setShowPassc] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <section className="container mx-auto my-16">
      <HelmetTitle title={"SIGN UP"} />
      <div className="flex items-center">
        <div className="flex-1 flex justify-center">
          <img
            src="https://i.ibb.co/vhgGwhw/student.jpg"
            className="w-72"
            alt=""
          />
        </div>
        <div className="flex-1 px-10">
          <div className="join join-vertical lg:join-horizontal">
            <Link to="/signup" className="btn join-item ">
              Student Sign Up
            </Link>
            <Link to="/instructorSignin" className="btn join-item active">
              Instructor Sign UP
            </Link>
          </div>
          <h2 className="text-4xl my-5">Please Sign Up (Instructor)</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="form-control max-w-md">
              <label>
                <span className="label justify-start after:text-red-500 after:content-['*']">
                  Name
                </span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="input input-bordered input-primary "
                placeholder="Name"
              />
              {errors.namme && (
                <span className="text-red-600 text-sm">
                  Name field is required
                </span>
              )}
            </div>
            <div className="form-control max-w-md">
              <label>
                <span className="label justify-start after:text-red-500 after:content-['*']">
                  Profile Photo
                </span>
              </label>
              <input
                type="file"
                {...register("photo", { required: true })}
                className="file-input file-input-bordered input-primary w-full max-w-md"
              />
              {errors.photo && (
                <span className="text-red-600 text-sm">
                  Photo field is required
                </span>
              )}
            </div>
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
              {errors.password && (
                <span className="text-red-600 text-sm">
                  Password field is required
                </span>
              )}
            </div>
            <div className="form-control max-w-md relative">
              <label>
                <span className="label justify-start after:text-red-500 after:content-['*']">
                  Confirm Password
                </span>
              </label>
              <input
                type={showpassc ? "text" : "password"}
                {...register("cpassword", { required: true })}
                className="input input-bordered input-primary "
                placeholder="Confirm Password"
              />
              <p
                className="absolute right-0 top-10 rounded-r-md select-none bg-gray-600 p-3"
                onClick={() => setShowPassc(!showpassc)}
              >
                {showpassc ? (
                  <FaRegEye className="text-2xl text-white" />
                ) : (
                  <FaRegEyeSlash className="text-2xl text-white" />
                )}
              </p>
              {errors.cpassword && (
                <span className="text-red-600 text-sm">
                  Password field is required
                </span>
              )}
            </div>

            <div className="form-control my-5">
              <input
                type="submit"
                className="btn btn-primary max-w-md"
                value="Sigup"
              />
            </div>
            <p>
              Already have Account ? Please
              <Link to="/instructorSignin" className="text-blue-600">
                Sign in
              </Link>{" "}
              or
            </p>
            <SocialSignIn />
          </form>
        </div>
      </div>
    </section>
  );
};

export default InstructorSignup;
