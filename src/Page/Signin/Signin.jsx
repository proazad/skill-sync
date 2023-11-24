import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <h1 className="text-4xl">Sign in</h1>
      <p>
        New Here ? please <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Signin;
