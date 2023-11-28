import { Link, useNavigate } from "react-router-dom/dist";
import useAuth from "../../Hooks/useAuth";
import useWhoAreYou from "../../Hooks/useWhoAreYou";
import NavItems from "../NavItems/NavItems";
import SiteLogo from "../siteTitle/SiteLogo";
const Navbar = () => {
  const { user, userLogOut } = useAuth();
  const [whoareyou] = useWhoAreYou();

  const navigate = useNavigate();
  const handleLogOut = () => {
    userLogOut().then(() => {
      navigate("/");
    });
  };
  return (
    <div className="w-full navbar bg-base-300">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1 px-2 mx-2">
        <SiteLogo />
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <NavItems />
        </ul>
      </div>
      {user && (
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt={user.displayName} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  {user.displayName}
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                {whoareyou?.role === "admin" && (
                  <Link to="/admin">Dashboard</Link>
                )}
                {whoareyou?.role === "student" && (
                  <Link to="dashboard/student">Dashboard</Link>
                )}
                {whoareyou?.role === "instructor" && (
                  <Link to="/instructor">Dashboard</Link>
                )}
              </li>
              <li>
                <p onClick={handleLogOut}>Logout</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
