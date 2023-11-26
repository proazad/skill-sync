import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaBookOpenReader, FaRegStar, FaStar } from "react-icons/fa6";
import { MdBookmarkAdded } from "react-icons/md";
import Rating from "react-rating";
const CourseCard = ({ course }) => {
  const {
    _id,
    title,
    image,
    lesson,
    price,
    enrolled,
    mentorimage,
    mentor,
    description,
    mentorId,
    ratings,
  } = course;
  return (
    <div className="h-full flex flex-col border rounded-md shadow hover:shadow-xl">
      <div className="relative">
        <span className="bg-green-600 hover:bg-rose-600 text-white px-2 py-1 text-xs transition duration-200 delay-100 border absolute w-12 h-12 rounded-badge flex items-center justify-center p-3 top-3 left-3 select-none">
          <b> ${price}</b>
        </span>
        <img
          src={image}
          alt={title}
          draggable="false"
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between flex-grow">
          <span className="text-green-600 text-xs flex gap-2">
            <FaBookOpenReader />
            {lesson} Lesson
          </span>
          <span className="text-green-600 text-xs flex gap-2">
            <MdBookmarkAdded /> {enrolled}+ Enrolled
          </span>
        </div>
        <div className="flex-grow my-3">
          <h2 className="text-base text-neutral font-semibold hover:text-green-600 transition duration-300 delay-500">
            {title}
          </h2>
          <span className="flex items-center gap-2">
            <Rating
              initialRating={ratings}
              readonly
              emptySymbol={<FaRegStar />}
              fullSymbol={<FaStar />}
              className="text-amber-600 text-sm"
            />
            {ratings}
          </span>
          <p className="text-xs">{description}</p>
        </div>
        <Link
          to={`instructor/${mentorId}`}
          className="flex justify-start gap-3 items-center my-2"
        >
          <img
            src={mentorimage}
            title={mentor}
            alt={mentor}
            className="w-8 h-8 rounded-badge"
          />
          <h3 className="text-sm">{mentor}</h3>
        </Link>
        <Link to={`/course/${_id}`} className="btn btn-sm btn-success">
          Enroll
        </Link>
      </div>
    </div>
  );
};
CourseCard.propTypes = {
  course: PropTypes.object,
};
export default CourseCard;
