import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useWhoAreYou from "../Hooks/useWhoAreYou";
const PrivterRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [whoareyou, isLoading] = useWhoAreYou();
  const location = useLocation();

  if (isLoading && !whoareyou) {
    return (
      <div className="text-center">
        <span className="loading loading-spinner loading-lg text-secondary"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};
PrivterRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivterRoute;
