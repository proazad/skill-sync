import { NavLink } from "react-router-dom/dist";

const NavItems = () => {
  return (
    <>
      <li>
        <NavLink to="/" className="uppercase">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allclasses" className="uppercase">
          All Classes
        </NavLink>
      </li>
      <li>
        <NavLink to="/teachonskillsync" className="uppercase">
          Teach on
          <span className="font-semibold text-blue-700">SkillSync Hub</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/signin" className="uppercase">
          Sign in
        </NavLink>
      </li>
    </>
  );
};

export default NavItems;
