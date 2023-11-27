import { TiThMenuOutline } from "react-icons/ti";
import { NavLink, Outlet } from "react-router-dom";
import SiteLogo from "../../Components/siteTitle/SiteLogo";
import useWhoAreYou from "../../Hooks/useWhoAreYou";
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
            <NavLink to={"/admin/instructorrequest"}>Teacher Request</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/student"}>All Student</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/instructor"}>All Instructor</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/course"}>All Course</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
