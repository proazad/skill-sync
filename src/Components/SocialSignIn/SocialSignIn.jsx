import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const SocialSignIn = () => {
  const { userSignInWithGoogle, setLoading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    userSignInWithGoogle()
      .then((res) => {
        const userInfo = {
          name: res?.user?.displayName,
          email: res?.user?.email,
          photo: res?.user?.photoURL,
          role:"student"
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res?.data?.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User Created Successfully",
              showConfirmButton: false,
              timer: 2500,
            });
            navigate(from);
          } else {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Sign in Successfull",
              showConfirmButton: false,
              timer: 2500,
            });
            navigate(from);
          }
        });
      })
      .catch(() => {
        setLoading(false);
      });
  };
  return (
    <div className="form-control max-w-md">
      <p className="divider text-neutral">Continue With</p>
      <div className="flex gap-5">
        <p
          onClick={handleGoogleSignIn}
          className="my-5 btn btn-outline btn-primary text-xl"
        >
          <FcGoogle /> Google
        </p>
        <p className="my-5 btn btn-outline btn-primary text-xl">
          <FaFacebook className="text-blue-600" /> Facebook
        </p>
        <p className="my-5 btn btn-outline btn-primary text-xl">
          <FaInstagram className="text-rose-600" /> Instagram
        </p>
      </div>
    </div>
  );
};

export default SocialSignIn;
