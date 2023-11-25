import { Link } from "react-router-dom";
import CommonBtn from "../CommonBtn/CommonBtn";
import SectionHead from "../SectionHead/SectionHead";

const BecomeMentor = () => {
  return (
    <section className="px-10 my-16">
      <SectionHead
        subtitle={"Instructor"}
        titlep1={"Become a"}
        titlep2={"Mentors"}
      />
      <div className="flex gap-10 items-center">
        <div className="px-16 w-[400px]">
          <img
            src="https://i.ibb.co/mTnLMxW/mentor.png"
            alt=""
            className="w-full"
            draggable="false"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-green-600 mb-3">
            Become an Instructor
          </h2>
          <p className="text-lg mb-5">
            Empower others through knowledge sharing. Join our community of
            educators and bring your expertise to life. Inspire learners, foster
            skill development, and contribute to a vibrant educational
            ecosystem. Start your journey as an instructor today.
          </p>
          <Link to={"/becomementor"}>
            <CommonBtn btntext={"Become an Instructor"} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BecomeMentor;
