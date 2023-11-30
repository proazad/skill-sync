import { FaBookOpenReader, FaRegStar, FaStar } from "react-icons/fa6";
import { GiDuration } from "react-icons/gi";
import { MdBookmarkAdded } from "react-icons/md";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import useFeedback from "../../../Hooks/useFeedback";
import useSingleCourse from "../../../Hooks/useSingleCourse";
const DetailsCourse = () => {
  const { id } = useParams();
  const [course] = useSingleCourse(id);
  const [feedback] = useFeedback();
  const feedbacks = feedback?.filter((item) => item.courseId === id);
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
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
        <div className="">
          <h2 className="text-4xl mb-5">Course Details </h2>
          <div className="w-full mx-auto border">
            <img src={image} alt="" className="w-full" />
            <div className="p-5">
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
                    {lesson ? lesson : 0}+ Lesson
                  </span>
                  <span className="text-green-600 text-xs flex items-center gap-2">
                    <GiDuration /> {duration ? duration : 0}
                  </span>
                  <span className="text-green-600 text-xs flex items-center gap-2">
                    <MdBookmarkAdded /> {enrolled ? enrolled : 0}+ Enrolled
                  </span>
                </div>
              </div>
              <p className="text-lg">{description}</p>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="text-4xl mb-5">Total Feedback: {feedbacks.length}</h2>
          <div className="grid grid-cols-1 gap-5">
            {feedbacks?.map((feedback) => (
              <div key={feedback._id} className="flex gap-3 shadow">
                <img src={feedback.image} alt="" className="w-28 rounded-md p-2 border shadow" />
                <div className="">
                  <h2 className="text-base lg:text-lg font-semibold">
                    {feedback.name}
                  </h2>
                  <p className="flex gap-3">
                    <Rating
                      initialRating={feedback.ratings}
                      readonly
                      emptySymbol={<FaRegStar />}
                      fullSymbol={<FaStar />}
                      className="text-amber-600 text-md"
                    />
                    {feedback.ratings}
                  </p>
                  <p className="text-sm">{feedback.feedback}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCourse;
