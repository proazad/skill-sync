import { FaBookOpenReader, FaRegStar, FaStar } from "react-icons/fa6";
import { GiDuration } from "react-icons/gi";
import { MdBookmarkAdded } from "react-icons/md";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import useSingleCourse from "../../Hooks/useSingleCourse";
const CourseDetails = () => {
  const { id } = useParams();
  const [course] = useSingleCourse(id);
  const {
    title,
    image,
    description,
    mentor,
    mentorId,
    mentorimage,
    duration,
    lesson,
    price,
    enrolled,
    ratings,
  } = course;
  return (
    <section className="container mx-auto my-16">
      <h2 className="text-xl lg:text-4xl font-bold ">Course Details</h2>
      <div className="w-full lg:w-7/12 mx-auto border p-10 my-10 ">
        <div className="border p-2 mb-5">
          <img src={image} alt="" className="w-full" />
        </div>
        <div className="mb-5">
          <h2 className="text-2xl">{title}</h2>
          <p className="flex justify-between">
            <span className="text-green-600">Price: ${price}</span>
            <Rating
              initialRating={ratings}
              readonly
              emptySymbol={<FaRegStar />}
              fullSymbol={<FaStar />}
              className="text-amber-600 text-xl"
            />
          </p>
        </div>
        <Link
          to={`instructor/${mentorId}`}
          className="flex justify-start gap-3 items-center my-2"
        >
          <img
            src={mentorimage}
            title={mentor}
            alt={mentor}
            className="w-12 h-12 rounded-badge"
          />
          <h3 className="text-sm">{mentor}</h3>
        </Link>
        <div>
          <div className="flex justify-between flex-grow my-5">
            <span className="text-green-600 text-xs flex items-center gap-2">
              <FaBookOpenReader />
              {lesson} Lesson
            </span>
            <span className="text-green-600 text-xs flex items-center gap-2">
              <GiDuration /> {duration}
            </span>
            <span className="text-green-600 text-xs flex items-center gap-2">
              <MdBookmarkAdded /> {enrolled}+ Enrolled
            </span>
          </div>
        </div>
        <p className="text-lg">{description}</p>
        <div className="text-center my-5">
          <button className="btn btn-success btn-sm btn-wide">Pay</button>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
