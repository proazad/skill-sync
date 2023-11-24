import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h1 className="text-4xl">Sign up</h1>
      <p>
        Aready Have an Account ? please <Link to="/signin">Sign in</Link>
      </p>
    </div>
  );
};

export default Signup;
