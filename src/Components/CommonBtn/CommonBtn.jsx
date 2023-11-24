import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa6";
const CommonBtn = ({ btntext }) => {
  return (
    <button className="flex items-center gap-3 custom-btn">
      {btntext} <FaArrowRight />
    </button>
  );
};
CommonBtn.propTypes = {
  btntext: PropTypes.string,
};
export default CommonBtn;
