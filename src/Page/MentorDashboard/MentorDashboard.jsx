import { TiThMenuOutline } from "react-icons/ti";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import SiteLogo from "../../Components/siteTitle/SiteLogo";
import useWhoAreYou from "../../Hooks/useWhoAreYou";
import { useMemo } from "react";
const MentorDashboard = () => {
  const [whoareyou] = useWhoAreYou();
  const instructor = useMemo(() => whoareyou, [whoareyou]);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content container px-5 lg:px-10">
        {/* Page content here */}
        <div className="flex justify-between my-3 items-center">
          <SiteLogo></SiteLogo>
          <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
            <TiThMenuOutline className="text-2xl" />
          </label>
        </div>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}

          <div className="flex flex-wrap justify-center">
            <img
              src={instructor?.image}
              className="w-20 h-20 rounded-full"
              alt=""
            />
            <div className="float-left text-center">
              <h2 className="text-xl">{instructor?.name}</h2>
              <h2 className="text-base text-green-600 capitalize">
                {instructor?.role}
              </h2>
              <h2 className="text-xl">{instructor?.email}</h2>
            </div>
          </div>
          <li className="mt-10">
            <NavLink to={"/instructor"} className="flex gap-2 items-center">
              <FaHome className="text-xl" /> Instructor Home
            </NavLink>
          </li>
          <li className="">
            <NavLink to={"/instructor/course"}>My All Course</NavLink>
          </li>
          <li className="">
            <NavLink to={"/instructor/newcourse"}>Add New Course</NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MentorDashboard;
