import { Link } from "react-router-dom";
import HelmetTitle from "../../Components/HelmetTitle/HelmetTitle";

const Signin = () => {
  return (
    <div>
      <HelmetTitle title={"SIGN IN"} />
      <h1 className="text-4xl">Sign in</h1>
      <p>
        New Here ? please <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Signin;
