import { useForm } from "react-hook-form";
import HelmetTitle from "../../Components/HelmetTitle/HelmetTitle";
const TeachOnSkillSync = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="container mx-auto my-16">
      <HelmetTitle title={"Become an Instructor"} />
      <div className="flex">
        <div className="w-[400px]">
          <img src="https://i.ibb.co/mTnLMxW/mentor.png" alt="" />
        </div>
        <div className="flex-1 px-10">
          <h2 className="text-4xl">Become a Instructor</h2>
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
                placeholder="Full Name"
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
                  Phone
                </span>
              </label>
              <input
                type="phone"
                {...register("phone", { required: true })}
                className="input input-bordered input-primary "
                placeholder="Phone number"
              />
              {errors.email && (
                <span className="text-red-600 text-sm">
                  email field is required
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
                  email field is required
                </span>
              )}
            </div>
            <div className="form-control max-w-md">
              <label>
                <span className="label justify-start after:text-red-500 after:content-['*']">
                  Experience
                </span>
              </label>
              <select
                {...register("experience")}
                className="select select-bordered select-primary"
              >
                <option>Select Experience</option>
                <option value="beginner">Beginner</option>
                <option value="other">other</option>
                <option value="expart">Expart</option>
              </select>
              {errors.experience && (
                <span className="text-red-600 text-sm">
                  Experience field is required
                </span>
              )}
            </div>
            <div className="form-control max-w-md">
              <label>
                <span className="label justify-start after:text-red-500 after:content-['*']">
                  Category
                </span>
              </label>
              <select
                {...register("category")}
                className="select select-bordered select-primary"
              >
                <option>Select Category</option>
                <option value="web-development">Web Development</option>
                <option value="data-science">Data Science</option>
                <option value="mobile-app-development">
                  Mobile App Development
                </option>
                <option value="advanced-javascript-concepts">
                  Advanced JavaScript Concepts
                </option>
                <option value="machine-learning">Machine Learning</option>
                <option value="graphic-design">Graphic Design</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="blockchain-technology">
                  Blockchain Technology
                </option>
                <option value="python-for-data-analysis">
                  Python for Data Analysis
                </option>
                <option value="ux/ui-design">UX/UI Design</option>
              </select>
              {errors.category && (
                <span className="text-red-600 text-sm">
                  Category field is required
                </span>
              )}
            </div>

            <div className="form-control my-5">
              <input
                type="submit"
                className="btn btn-wide btn-primary"
                value="Submit for Review"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TeachOnSkillSync;
