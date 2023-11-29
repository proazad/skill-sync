import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useWhoAreYou from "../Hooks/useWhoAreYou";
const InstructorRoute = ({ children }) => {
  const [whoareyou, isLoading, refetch] = useWhoAreYou();
  const navigate = useNavigate();
  refetch();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <progress className="progress progress-success w-56 h-5"></progress>
      </div>
    );
  } else {
    if (whoareyou?.role === "instructor") {
      return children;
    }
  }

  return navigate("/");
};

InstructorRoute.propTypes = {
  children: PropTypes.node,
};
export default InstructorRoute;
