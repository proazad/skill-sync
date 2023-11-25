import PropTypes from "prop-types";
const FeaturedCard = ({ course }) => {
  const { title, image, label, price, enrolled, mentorimage, mentor } = course;
  return (
    <div className="h-full border rounded-md shadow-md select-none">
      <div className="relative">
        <span className="bg-green-600 text-white hover:text-black px-2 py-1 text-sm transition duration-300 delay-300 border-green-600 border absolute w-12 h-12 rounded-badge flex items-center justify-center p-3 top-3 left-3 select-none">
          <b> ${price}</b>
        </span>
        <img src={image} alt={title} draggable="false" />
      </div>
      <div className="p-4 flex flex-col">
        <div className="flex justify-between">
          <span className="bg-green-600 hover:bg-white text-white hover:text-green-600 px-2 py-1 rounded text-base transition duration-300 delay-300 border-green-600 border">
            {label}
          </span>
          <span className="text-green-600">Enrolled {enrolled}</span>
        </div>
        <h2 className="text-xl text-neutral font-semibold hover:text-green-600 transition duration-300 my-3 delay-500">
          {title}
        </h2>
        <div className="flex justify-start gap-3 items-center">
          <img
            src={mentorimage}
            title={mentor}
            alt={mentor}
            className="w-12 h-12 rounded-badge p-1 bg-green-600"
          />
          <h3 className="text-xl">{mentor}</h3>
        </div>
      </div>
    </div>
  );
};
FeaturedCard.propTypes = {
  course: PropTypes.object,
};
export default FeaturedCard;
