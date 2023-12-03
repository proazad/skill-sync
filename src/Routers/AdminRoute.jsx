import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useWhoAreYou from "../Hooks/useWhoAreYou";
const AdminRoute = ({ children }) => {
  const [whoareyou, isLoading, refetch] = useWhoAreYou();
  refetch();
  if (isLoading && !whoareyou) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <progress className="progress progress-success w-56 h-5"></progress>
      </div>
    );
  } else {
    if (whoareyou?.role === "admin") {
      return children;
    }
  }

  return <Navigate to="/" replace></Navigate>;
};
AdminRoute.propTypes = {
  children: PropTypes.node,
};
export default AdminRoute;
