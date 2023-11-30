import { FaCheck } from "react-icons/fa";
import CommonBtn from "../CommonBtn/CommonBtn";
import { Link } from "react-router-dom";

const OnePlatfrom = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co/0Q5LKwM/section-bg-2.png)",
        padding: "50px 0px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=""
    >
      <div className="container px-3 lg:px-0 mx-auto grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-5">
        <div>
          <p className="text-[#2ECA7F] font-bold">
            Best Online Learning Platform
          </p>
          <h1 className="text-[#1A2D62] text-base lg:text-5xl font-bold my-3">
            One Platfrom & Many{" "}
            <span className="underline text-[#2ECA7F] ">Courses</span> For You
          </h1>
          <p className="text-[#7A7A7A] mt-4">
            From blogs to emails to ad copies, auto-generate catchy, original,
            and high-converting copies in popular tones languages.
          </p>
          <div className="mt-4">
            <ul className="leading-8 my-5">
              <li className="flex items-center gap-x-4">
                <span className="bg-green-500 p-1">
                  <FaCheck className=" text-white" />
                </span>
                <p>9/10 Average Satisfaction Rate</p>
              </li>
              <li className="flex items-center gap-x-4">
                <span className="bg-green-500 p-1">
                  <FaCheck className=" text-white" />
                </span>
                <p>96% Completitation Rate</p>
              </li>
              <li className="flex items-center gap-x-4">
                <span className="bg-green-500 p-1">
                  <FaCheck className=" text-white" />
                </span>
                <p> Friendly Environment & Expert Teacher</p>
              </li>
            </ul>
            <Link to="/allclasses">
              <CommonBtn btntext={"Expore Our Courses"} />
            </Link>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/H4wcnCc/promo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default OnePlatfrom;
