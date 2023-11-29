import CountUp from "react-countup";
import { FaUserGraduate } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdBookmarkAdded } from "react-icons/md";
import useAllUsers from "../../Hooks/useAllUsers";
import SectionHead from "../SectionHead/SectionHead";
import useAllCourse from "../../Hooks/useAllCourse";
const StatisticsSection = () => {
  const [courses] = useAllCourse();
  const approvedCourse = courses?.filter(
    (course) => course.isApproved === true
  );
  const [users] = useAllUsers();
  const students = users?.filter((student) => student.role === "student");

  const totalEnrolled = approvedCourse?.reduce(
    (total, course) => total + course.enrolled,
    0
  );
  return (
    <section className="container mx-auto px-2 md:px-5 xl:px-0 my-10">
      <SectionHead
        subtitle={"Statistics"}
        titlep1={"At a Glance"}
        titlep2={"SkillSync Success"}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="border shadow-lg rounded-md p-10 flex justify-center items-center flex-col select-none hover:bg-green-600/50 transition duration-300">
          <h6 className="text-7xl font-medium">
            <FaUserGraduate />
          </h6>
          <h2 className="text-5xl font-bold mt-5 text-neutral/90">
            <CountUp end={students.length} duration={15} />+
          </h2>
          <h2 className="text-base font-semibold text-neutral/90">Students</h2>
        </div>
        <div className="border shadow-lg rounded-md p-10 flex justify-center items-center flex-col select-none hover:bg-green-600/50 transition duration-300">
          <h6 className="text-7xl font-medium">
            <FaBookOpenReader />
          </h6>
          <h2 className="text-5xl font-bold mt-5 text-neutral/90">
            <CountUp end={courses.length} duration={15} />+
          </h2>
          <h2 className="text-base font-semibold text-neutral/90">Courses</h2>
        </div>
        <div className="border shadow-lg rounded-md p-10 flex justify-center items-center flex-col select-none hover:bg-green-600/50 transition duration-300">
          <h6 className="text-7xl font-medium">
            <MdBookmarkAdded />
          </h6>
          <h2 className="text-5xl font-bold mt-5 text-neutral/90">
            <CountUp end={totalEnrolled} duration={15} />+
          </h2>
          <h2 className="text-base font-semibold text-neutral/90">
            Enrollment
          </h2>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
