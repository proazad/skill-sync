import SectionHead from "../SectionHead/SectionHead";
import { FaUserGraduate } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdBookmarkAdded } from "react-icons/md";
import CountUp from "react-countup";
import useAllCourse from "../../Hooks/useAllCourse";
import useAllStudents from "../../Hooks/useAllStudents";
const StatisticsSection = () => {
  const [courses] = useAllCourse();
  const [students] = useAllStudents();
  const totalEnrolled = courses.reduce(
    (total, course) => total + course.enrolled,
    0
  );

  return (
    <section className="px-10 m-16">
      <SectionHead
        subtitle={"Statistics"}
        titlep1={"At a Glance"}
        titlep2={"SkillSync Success"}
      />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border shadow-lg rounded-md p-10 flex justify-center items-center flex-col select-none">
          <h6 className="text-7xl font-medium">
            <FaUserGraduate />
          </h6>
          <h2 className="text-5xl font-bold mt-5 text-neutral/90">
            <CountUp end={students.length} duration={15} />+
          </h2>
          <h2 className="text-base font-semibold text-neutral/90">Students</h2>
        </div>
        <div className="border shadow-lg rounded-md p-10 flex justify-center items-center flex-col select-none">
          <h6 className="text-7xl font-medium">
            <FaBookOpenReader />
          </h6>
          <h2 className="text-5xl font-bold mt-5 text-neutral/90">
            <CountUp end={courses.length} duration={15} />+
          </h2>
          <h2 className="text-base font-semibold text-neutral/90">Courses</h2>
        </div>
        <div className="border shadow-lg rounded-md p-10 flex justify-center items-center flex-col select-none">
          <h6 className="text-7xl font-medium">
            <MdBookmarkAdded />
          </h6>
          <h2 className="text-5xl font-bold mt-5 text-neutral/90">
            <CountUp end={totalEnrolled} duration={totalEnrolled / 90} />+
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
