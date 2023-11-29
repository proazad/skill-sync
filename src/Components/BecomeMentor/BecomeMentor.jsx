import { Link } from "react-router-dom";
import CommonBtn from "../CommonBtn/CommonBtn";
import SectionHead from "../SectionHead/SectionHead";

const BecomeMentor = () => {
  return (
    <section className="container mx-auto px-2 md:px-5 xl:px-0 my-10">
      <SectionHead
        subtitle={"Instructor"}
        titlep1={"Become a"}
        titlep2={"Mentors"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="px-16">
          <img
            src="https://i.ibb.co/mTnLMxW/mentor.png"
            alt=""
            className="w-full"
            draggable="false"
          />
        </div>
        <div className="">
          <h2 className="text-4xl font-bold text-green-600 mb-3">
            Become an Instructor
          </h2>
          <p className="text-lg mb-5">
            Empower others through knowledge sharing. Join our community of
            educators and bring your expertise to life. Inspire learners, foster
            skill development, and contribute to a vibrant educational
            ecosystem. Start your journey as an instructor today.
          </p>
          <Link to={"/teachonskillsync"}>
            <CommonBtn btntext={"Become an Instructor"} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BecomeMentor;
