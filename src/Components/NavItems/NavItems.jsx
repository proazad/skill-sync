import { NavLink } from "react-router-dom/dist";
import useAuth from "../../Hooks/useAuth";

const NavItems = () => {
  const { user } = useAuth();

  return (
    <>
      <li>
        <NavLink to="/" className="uppercase font-semibold text-green-600">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allclasses"
          className="uppercase font-semibold text-green-600"
        >
          All Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/teachonskillsync"
          className="uppercase font-semibold text-green-600"
        >
          Teach on
          <span className="font-semibold text-green-900">SkillSync Hub</span>
        </NavLink>
      </li>
      {!user && (
        <li>
          <NavLink
            to="/signin"
            className="uppercase font-semibold text-green-600"
          >
            Sign in
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavItems;
