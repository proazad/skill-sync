import { Outlet } from "react-router-dom/dist";
import NavItems from "../Components/NavItems/NavItems";
import Navbar from "../Components/Navbar/Navbar";
import useAuth from "../Hooks/useAuth";
import useWhoAreYou from "../Hooks/useWhoAreYou";

const Front = () => {
  const { user } = useAuth();
  const [whoareyou, isLoading] = useWhoAreYou();
  if (user?.email) {
    if (isLoading && !whoareyou) {
      return (
        <div className="flex justify-center items-center h-screen w-screen">
          <progress className="progress progress-success w-56 h-5"></progress>
        </div>
      );
    }
  }
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <Navbar />

        {/* Page content here */}
        <div className="w-full">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <NavItems />
        </ul>
      </div>
    </div>
  );
};

export default Front;
