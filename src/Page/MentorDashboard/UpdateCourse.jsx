import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import useSingleCourse from "../../Hooks/useSingleCourse";

const UpdateCourse = () => {
  const { id } = useParams();
  const [course] = useSingleCourse(id);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosPrivate = useAxiosPrivate();
  const onSubmit = async (data) => {
    const updateCourse = {
      title: data.title,
      image: data.image,
      label: data.label,
      price: parseFloat(data.price),
      duration: parseFloat(data.duration),
      lesson: parseFloat(data.lesson),
      description: data.description,
      mentorId: id,
      email: data.email,
      date: new Date(),
      isApproved: false,
    };
    axiosPrivate
      .put(`/courses/update/${course._id}`, updateCourse)
      .then((res) => {
        if (res.data) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Course Upateded Successfull",
            showConfirmButton: false,
            timer: 2500,
          });
          navigate("/instructor/course");
        }
      });
  };
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-green-600">Update Coures </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        {/* Course Title  */}
        <div className="form-control">
          <label>
            <span className="label justify-start after:text-red-500 after:content-['*']">
              Title
            </span>
          </label>
          <input
            type="text"
            {...register("title", { required: true })}
            className="input input-bordered input-primary "
            defaultValue={course?.title}
          />
          {errors.title && (
            <span className="text-red-600 text-sm">
              Title field is required
            </span>
          )}
        </div>
        {/* Course Feature Image  */}
        <div className="form-control">
          <label>
            <span className="label justify-start after:text-red-500 after:content-['*']">
              Image
            </span>
          </label>
          <input
            type="url"
            {...register("image", { required: true })}
            className="input input-bordered  input-primary w-full"
            defaultValue={course?.image}
          />
          {errors.image && (
            <span className="text-red-600 text-sm">
              Image field is required
            </span>
          )}
        </div>
        {/* Price  & Label  */}
        <div className="flex gap-5">
          <div className="forom-contrl w-full">
            <label>
              <span className="label justify-start after:text-red-500 after:content-['*']">
                Price
              </span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              className="input input-bordered  input-primary w-full"
              defaultValue={course?.price}
            />
            {errors.price && (
              <span className="text-red-600 text-sm">
                Price field is required
              </span>
            )}
          </div>
          <div className="forom-contrl w-full">
            <label>
              <span className="label justify-start after:text-red-500 after:content-['*']">
                Course Label
              </span>
            </label>
            <select
              {...register("label")}
              className="select select-bordered select-primary w-full"
              defaultValue={course.label}
            >
              <option>Select Label</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="professional">Professional</option>
            </select>
            {errors.label && (
              <span className="text-red-600 text-sm">
                Label field is required
              </span>
            )}
          </div>
        </div>
        {/* lesson & Duration  */}
        <div className="flex gap-5">
          <div className="forom-contrl w-full">
            <label>
              <span className="label justify-start after:text-red-500 after:content-['*']">
                Duration (Hour)
              </span>
            </label>
            <input
              type="number"
              {...register("duration", { required: true })}
              className="input input-bordered  input-primary w-full"
              defaultValue={course.duration}
            />
            {errors.duration && (
              <span className="text-red-600 text-sm">
                Duration field is required
              </span>
            )}
          </div>
          <div className="forom-contrl w-full">
            <label>
              <span className="label justify-start after:text-red-500 after:content-['*']">
                Lesson
              </span>
            </label>
            <input
              type="number"
              {...register("lesson", { required: true })}
              className="input input-bordered  input-primary w-full"
              defaultValue={course.lesson}
            />
            {errors.lesson && (
              <span className="text-red-600 text-sm">
                Lesson field is required
              </span>
            )}
          </div>
        </div>

        {/* Mentor & mentor Email  */}
        <div className="flex gap-5">
          <div className="form-control w-full">
            <label>
              <span className="label justify-start after:text-red-500 after:content-['*']">
                Mentor
              </span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: true,
              })}
              className="input input-bordered input-primary "
              defaultValue={course.mentor}
              readOnly
            />
          </div>
          <div className="form-control w-full">
            <label>
              <span className="label justify-start after:text-red-500 after:content-['*']">
                Mentor Email
              </span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
              })}
              className="input input-bordered input-primary "
              defaultValue={course?.email}
              readOnly
            />
            {errors.email && (
              <span className="text-red-600 text-sm">
                Mentor Email field is required
              </span>
            )}
          </div>
        </div>
        {/* Description  */}
        <div className="forom-contrl w-full">
          <label>
            <span className="label justify-start after:text-red-500 after:content-['*']">
              Description
            </span>
          </label>
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-primary w-full"
            defaultValue={course.description}
          ></textarea>

          {errors.description && (
            <span className="text-red-600 text-sm">
              Description field is required
            </span>
          )}
        </div>
        <div className="form-control my-5">
          <input
            type="submit"
            className="btn btn-primary uppercase"
            value="Course Submit for Reviw"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateCourse;
