import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
const SocialSignIn = () => {
  return (
    <div className="form-control max-w-md">
      <p className="divider text-neutral">Continue With</p>
      <div className="flex gap-5">
        <p className="my-5 btn btn-outline btn-primary text-xl">
          <FcGoogle /> Google
        </p>
        <p className="my-5 btn btn-outline btn-primary text-xl">
          <FaFacebook className="text-blue-600"/> Facebook
        </p>
        <p className="my-5 btn btn-outline btn-primary text-xl">
        <FaInstagram className="text-rose-600" /> Instagram
        </p>
      </div>
    </div>
  );
};

export default SocialSignIn;
