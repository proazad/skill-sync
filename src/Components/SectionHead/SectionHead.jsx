import PropTypes from "prop-types";
const SectionHead = ({ subtitle, titlep1, titlep2 }) => {
  return (
    <div className="my-14">
      <p className="text-xs sm:text-base text-green-600 pipeline w-fit uppercase">{subtitle}</p>
      <h2 className="text-2xl sm:text-4xl font-semibold">
        {titlep1} <span className="text-green-600">{titlep2}</span>
      </h2>
    </div>
  );
};
SectionHead.propTypes = {
  subtitle: PropTypes.string,
  titlep1: PropTypes.string,
  titlep2: PropTypes.string,
};
export default SectionHead;
