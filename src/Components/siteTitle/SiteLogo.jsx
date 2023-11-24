import { Link } from "react-router-dom/dist";

const SiteLogo = () => {
  return (
    <Link
      to="/"
      className="font-bold text-xl border border-green-700 group overflow-hidden"
    >
      <span className="bg-inherit text-green-700 px-1 py-1 transition-colors duration-500 group-hover:bg-green-700 group-hover:text-white ease-linear">
        SkillSync
      </span>
      <span className="text-white bg-green-700 px-1 py-1 transition-colors duration-500 group-hover:text-green-700 group-hover:bg-inherit ease-in-out">
        Hub
      </span>
    </Link>
  );
};

export default SiteLogo;
