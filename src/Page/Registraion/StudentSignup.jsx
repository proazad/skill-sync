import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import HelmetTitle from "../../Components/HelmetTitle/HelmetTitle";
import SocialSignIn from "../../Components/SocialSignIn/SocialSignIn";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const StudentSignup = () => {
  const [showpass, setShowPass] = useState(false);
  const [showpassc, setShowPassc] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, userProfileUpdate, userLogOut } = useAuth();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    createUser(data.email, data.password)
      .then(() => {
        userProfileUpdate(data.name, data.photo).then(() => {
          const userinfo = {
            name: data.name,
            email: data.email,
            photo: data.photo,
          };
          axiosPublic.post("/students", userinfo).then((res) => {
            if (res.data.insertedId) {
              userLogOut().then(() => {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User Created Successfully",
                  text: "Please Sign in with your credentials",
                  showConfirmButton: false,
                  timer: 2500,
                });
                navigate("/signin");
              });
            }
          });
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "User Already Exists",
          text: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
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
            <Link to="/signup" className="btn join-item active">
              Student Sign Up
            </Link>
            <Link to="/instructorSignup" className="btn join-item">
              Instructor Sign UP
            </Link>
          </div>
          <h2 className="text-4xl my-5">Please Sign Up (Student)</h2>
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
              {errors.name && (
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
                type="url"
                {...register("photo", { required: true })}
                className="input input-bordered  input-primary w-full max-w-md"
                placeholder="https://example.com/xyz.jpg"
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
                className="btn btn-primary max-w-md uppercase"
                value="Student Signup"
              />
            </div>
            <p>
              Already have Account ? Please
              <Link to="/signin" className="text-blue-600">
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

export default StudentSignup;
