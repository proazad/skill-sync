import { useParams } from "react-router-dom";
import useSingleCourse from "../../Hooks/useSingleCourse";

const MentorCourseDetails = () => {
  const { id } = useParams();
  const [course] = useSingleCourse(id);
  console.log(course);
  return (
    <div className="my-8">
      <h2 className="text-4xl font-bold">Course Details</h2>
      <h2 className="text-2xl font-semibold text-green-600 my-5">
        Class Progress
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="p-5 border border-success rounded-md flex flex-col items-center justify-center">
          <h2 className="text-6xl font-bold text-green-600">
            {course?.enrolled ? course?.enrolled : 0}
          </h2>
          <h2 className="text-3xl font-bold">Total Enrollment</h2>
        </div>
        <div className="p-5 border border-success rounded-md flex flex-col items-center justify-center">
          <h2 className="text-6xl font-bold text-green-600">
            {course?.assainment ? course?.assainment : 0}
          </h2>
          <h2 className="text-3xl font-bold">Total Assainment</h2>
        </div>
        <div className="p-5 border border-success rounded-md flex flex-col items-center justify-center">
          <h2 className="text-6xl font-bold text-green-600">
            {course?.assainmentSubmitCountByDay
              ? course?.assainmentSubmitCountByDay
              : 0}
          </h2>
          <h2 className="text-3xl font-bold text-center">Per Day Assainmnet Submited</h2>
        </div>
      </div>
    </div>
  );
};

export default MentorCourseDetails;
