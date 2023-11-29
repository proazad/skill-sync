import { FaUserGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";
import bg1 from "../../assets/home-image.png";
import bg from "../../assets/home.png";
import CommonBtn from "../CommonBtn/CommonBtn";
const Banner = () => {
  return (
    <section
      className="flex items-center gap-0 sm:gap-3 lg:gap-8 bg-cover  bg-no-repeat bg-left-top py-5 sm:py-10 lg:py-24 px-3 sm:px-10 lg:px-20 "
      style={{ backgroundImage: `url('${bg}')` }}
    >
      <div className="flex-1">
        <h1 className="text-base sm:text-4xl  lg:text-7xl xl:text-8xl text-neutral font-medium sm:font-bold">
          Better <br /> <span className="text-green-600">Learning Future</span>
          Starts With SkillSync
        </h1>
        <p className="text-lg my-5 text-neutral hidden md:block">
          SkillSync sparks a better learning future by nurturing skills,
          fostering growth, and empowering individuals towards success
        </p>
        <Link to={"/allclasses"} className="">
          <CommonBtn btntext="Explore Classes"/>
        </Link>
      </div>
      <div className="flex-1 flex items-end relative">
        <img
          src={bg1}
          alt=""
          className="w-full select-none"
          draggable="false"
        />
        <div className="hidden md:flex absolute md:top-32  md:-right-6 lg:top-32  lg:-right-8 gap-4 bg-white rounded-2xl px-2 lg:px-3 py-2 lg:py-3 shadow">
          <FaUserGroup className="lg:text-3xl" />
          <div>
            <h2 className="lg:text-xl font-bold">4000+</h2>
            <span className="text-base text-gray-600">Online Course</span>
          </div>
        </div>
        <div className="hidden md:flex absolute md:bottom-16 md:-left-6 lg:-left-8  gap-4 bg-white rounded-2xl px-2 lg:px-4 py-2 lg:py-4 shadow">
          <FaUserGroup className="lg:text-3xl" />
          <div>
            <h2 className="lg:text-xl font-bold">7500+</h2>
            <span className="text-base text-gray-600">Active student</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
