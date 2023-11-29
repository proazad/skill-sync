import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import useWhoAreYou from "../../Hooks/useWhoAreYou";

const AddNewCourse = () => {
  const [whoareyou] = useWhoAreYou();
  const id = whoareyou._id;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosPrivate = useAxiosPrivate();
  const onSubmit = async (data) => {
    const course = {
      title: data.title,
      image: data.image,
      price: parseFloat(data.price),
      duration: parseFloat(data.duration),
      lesson: parseFloat(data.lesson),
      description: data.description,
      mentorId: id,
      mentor: whoareyou.name,
      email: data.email,
      isApproved: false,
      enrolled: 0,
    };
    axiosPrivate.post("/courses", course).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Course Post Successfull",
          text: "Please wait for Approval",
          showConfirmButton: false,
          timer: 2500,
        });
        navigate("/instructor/course");
      }
    });
  };
  return (
    <div className="my-10">
      <div className="px-10 my-10">
        <h2 className="text-4xl">Add New Course</h2>
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
              placeholder="Title"
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
              placeholder="https://example.com/xyz.jpg"
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
                placeholder="$00.00"
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
                placeholder="Course Duration in Hour"
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
                placeholder="How many Lession ?"
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
                defaultValue={whoareyou?.name}
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
                defaultValue={whoareyou?.email}
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
              placeholder="Description"
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
    </div>
  );
};

export default AddNewCourse;
