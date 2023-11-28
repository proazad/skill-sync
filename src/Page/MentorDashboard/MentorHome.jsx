import { useMemo } from "react";
import useWhoAreYou from "../../Hooks/useWhoAreYou";
import { FaBook } from "react-icons/fa";
import useCourseByEmail from "../../Hooks/useCourseByEmail";
const MentorHome = () => {
  const [whoareyou] = useWhoAreYou();
  const instructor = useMemo(() => whoareyou, [whoareyou]);
  const [mycourses] = useCourseByEmail();
  const approve = mycourses?.filter((course) => course.isApproved === true);
  const pending = mycourses?.filter(
    (course) => (course.isApproved === false) & !course.isreject
  );
  const reject = mycourses?.filter((course) => course.isreject === true);
  return (
    <div className="my-10">
      <h2 className="text-4xl">
        Welcome
        <span className="text-green-600 font-bold">{instructor?.name}</span>
      </h2>
      <div className="grid grid-cols-1 my-5 gap-5  sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-10 flex flex-col items-center justify-center bg-green-600/70 rounded-md">
          <FaBook className="text-5xl text-white" />
          <h2 className="text-4xl text-center my-5 text-white font-bold">
            <span className="text-neutral">Active</span> Course :
            {approve?.length || 0}
          </h2>
        </div>

        <div className="p-10 flex flex-col items-center justify-center bg-green-600/70 rounded-md">
          <FaBook className="text-5xl text-white" />
          <h2 className="text-4xl text-center my-5 text-white font-bold">
            <span className="text-neutral">Pending</span> Course :
            {pending.length || 0}
          </h2>
        </div>
        <div className="p-10 flex flex-col items-center justify-center bg-green-600/70 rounded-md">
          <FaBook className="text-5xl text-white" />
          <h2 className="text-4xl text-center my-5 text-white font-bold">
            <span className="text-neutral">Rejected</span> Course :
            {reject.length || 0}
          </h2>
        </div>
        <div className="p-10 flex flex-col items-center justify-center bg-green-600/70 rounded-md">
          <FaBook className="text-5xl text-white" />
          <h2 className="text-4xl text-center my-5 text-white font-bold">
            <span className="text-neutral">Total</span> Students :
            {instructor?.courses?.length || 0}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MentorHome;
