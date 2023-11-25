import SectionHead from "../SectionHead/SectionHead";
import { FaUserGraduate } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdBookmarkAdded } from "react-icons/md";
const StatisticsSection = () => {
  return (
    <section className="px-10 m-16">
      <SectionHead
        subtitle={"Statistics"}
        titlep1={"At a Glance"}
        titlep2={"SkillSync Statistics"}
      />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border shadow-lg rounded-md p-10 flex justify-center items-center flex-col">
          <h6 className="text-7xl font-medium">
            <FaUserGraduate />
          </h6>
          <h2 className="text-5xl font-bold mt-5 text-neutral/90">154+</h2>
          <h2 className="text-base text-neutral/90">Students</h2>
        </div>
        <div className="border shadow-lg rounded-md p-10 flex justify-center items-center flex-col">
          <h6 className="text-7xl font-medium">
            <FaBookOpenReader />
          </h6>
          <h2 className="text-5xl font-bold mt-5 text-neutral/90">2354+</h2>
          <h2 className="text-base text-neutral/90">Courses</h2>
        </div>
        <div className="border shadow-lg rounded-md p-10 flex justify-center items-center flex-col">
          <h6 className="text-7xl font-medium">
            <MdBookmarkAdded />
          </h6>
          <h2 className="text-5xl font-bold mt-5 text-neutral/90">4354+</h2>
          <h2 className="text-base text-neutral/90">Enrollment</h2>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
