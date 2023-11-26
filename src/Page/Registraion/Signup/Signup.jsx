import { Link } from "react-router-dom";
import HelmetTitle from "../../../Components/HelmetTitle/HelmetTitle";

const Signup = () => {
  return (
    <div>
      <HelmetTitle title={"SIGN UP"} />
      <h1 className="text-4xl">Sign up</h1>
      <p>
        Aready Have an Account ? please <Link to="/signin">Sign in</Link>
      </p>
    </div>
  );
};

export default Signup;
