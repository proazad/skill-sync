import {
  FaSquareFacebook,
  FaXTwitter,
  FaLinkedin,
  FaSquareInstagram,
} from "react-icons/fa6";
import { GiWhiteBook } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { Link } from "react-router-dom";
import useAllMentors from "../../Hooks/useAllMentors";
import SectionHead from "../SectionHead/SectionHead";
const OurInstructors = () => {
  const [instructors] = useAllMentors();
  return (
    <section className="px-10 my-16">
      <SectionHead
        subtitle={"Team Member"}
        titlep1={"Our Expert"}
        titlep2={"Instructors"}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
        {instructors?.slice(0, 3)?.map((instructor) => (
          <div
            key={instructor._id}
            className="p-2 border rounded-md select-none group"
          >
            <div className="overflow-hidden relative">
              <img
                src={instructor.image}
                alt={instructor.name}
                draggable="false"
                className="rounded-md"
              />
              <div className="flex flex-col items-center justify-center w-0 group-hover:w-full h-0 bg-green-600/50 p-5 absolute -left-20 group-hover:left-0 -bottom-10 group-hover:bottom-0 group-hover:h-full rounded-md transition-all duration-700 text-center">
                <h2 className="text-2xl font-bold text-neutral my-2">
                  {instructor.name}
                </h2>
                <h4 className="text-lg text-neutral font-semibold">
                  {instructor.expertise}
                </h4>
                <p className="text-xl font-bold flex items-center gap-2">
                  <GiWhiteBook />
                  {instructor?.courses?.length} Courses
                </p>
                <p className="text-xl font-bold flex items-center gap-2">
                  <PiStudent />
                  {instructor?.students} Students
                </p>
                <p className="flex gap-2">
                  <Link to={"https://facebook.com/socialmedia"}>
                    <FaSquareFacebook className="text-2xl text-blue-700" />
                  </Link>
                  <Link to={"https://facebook.com/socialmedia"}>
                    <FaXTwitter className="text-2xl text-cyan-500" />
                  </Link>
                  <Link to={"https://facebook.com/socialmedia"}>
                    <FaLinkedin className="text-2xl text-blue-700" />
                  </Link>
                  <Link to={"https://facebook.com/socialmedia"}>
                    <FaSquareInstagram className="text-2xl text-rose-700" />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurInstructors;
