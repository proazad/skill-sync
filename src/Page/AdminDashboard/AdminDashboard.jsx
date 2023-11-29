import { TiThMenuOutline } from "react-icons/ti";
import { NavLink, Outlet } from "react-router-dom";
import { PiStudentBold } from "react-icons/pi";
import { LuBookPlus } from "react-icons/lu";
import { FaBook } from "react-icons/fa6";
import SiteLogo from "../../Components/siteTitle/SiteLogo";
import useWhoAreYou from "../../Hooks/useWhoAreYou";
import { FcBusinessman } from "react-icons/fc";
const AdminDashboard = () => {
  const [whoareyou] = useWhoAreYou();
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
              src={whoareyou.image}
              className="w-20 h-20 rounded-full"
              alt=""
            />
            <div className="float-left text-center">
              <h2 className="text-xl">{whoareyou.name}</h2>
              <h2 className="text-base text-green-600 capitalize">
                {whoareyou.role}
              </h2>
              <h2 className="text-xl">{whoareyou.email}</h2>
            </div>
          </div>
          <li>
            <NavLink to={"/admin/instructorrequest"}><FcBusinessman className="text-xl"/>Teacher Request</NavLink>
          </li>

          <li>
            <NavLink to={"/admin/instructor"}><FcBusinessman className="text-xl"/>All Instructor</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/student"} className="flex items-center">
              <PiStudentBold className="text-xl" />
              All Student
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/course"}>
              <FaBook className="text-xl" />
              All Course
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/courserequest"}>
              <LuBookPlus className="text-xl" />
              All Course Request
            </NavLink>
          </li>
          <div className=" divider"></div>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
