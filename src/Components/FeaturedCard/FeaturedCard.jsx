import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdBookmarkAdded } from "react-icons/md";
const FeaturedCard = ({ course }) => {
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
  } = course;
  return (
    <div className="h-full flex flex-col border rounded-md shadow hover:shadow-xl">
      <div className="relative">
        <span className="bg-green-600 text-white hover:text-black px-2 py-1 text-xs transition duration-300 delay-300 border-green-600 border absolute w-12 h-12 rounded-badge flex items-center justify-center p-3 top-3 left-3 select-none">
          <b> ${price}</b>
        </span>
        <img
          src={image}
          alt={title}
          draggable="false"
          className="h-64 w-full"
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
        <div className="flex-grow">
          <h2 className="text-base text-neutral font-semibold hover:text-green-600 transition duration-300 my-3 delay-500">
            {title}
          </h2>
          <p className="text-xs">{description.slice(0,100).concat("...")}</p>
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
FeaturedCard.propTypes = {
  course: PropTypes.object,
};
export default FeaturedCard;
