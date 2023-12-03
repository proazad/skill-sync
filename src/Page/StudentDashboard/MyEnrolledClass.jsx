import { Link } from "react-router-dom";
import useAllCourse from "../../Hooks/useAllCourse";
import useWhoAreYou from "../../Hooks/useWhoAreYou";

const MyEnrolledClass = () => {
  const [whoareyou] = useWhoAreYou();
  const [courses] = useAllCourse();
  const enrolledCourses = courses.filter((course) =>
    whoareyou.enrolledCourseId.includes(course._id)
  );

  return (
    <div>
      <h2 className="text-4xl">My All Course : {enrolledCourses.length}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-5">
        {enrolledCourses?.map((course) => (
          <div key={course._id} className="p-2 border">
            <img src={course?.image} alt="" />
            <h2 className="text-xl">{course?.title}</h2>
            <p>{course?.mentor}</p>
            <Link
              to={`/dashboard/student/myenroll-class/${course._id}`}
              className="btn btn-sm btn-info"
            >
              Continue
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEnrolledClass;
