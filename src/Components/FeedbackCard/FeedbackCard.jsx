import PropTypes from "prop-types";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
const FeedbackCard = ({ reviews }) => {
  const { ratings, image, name, feedback, coursetitle } = reviews;
  return (
    <div className="h-full w-full lg:w-7/12 mx-auto select-none p-5 rounded-md text-center">
      <Rating
        initialRating={ratings}
        readonly
        emptySymbol={<FaRegStar />}
        fullSymbol={<FaStar />}
        className="text-amber-600 text-xl"
      />
      <p className="text-neutral my-3">{feedback}</p>
      <div className="flex flex-col items-center justify-center gap-5 my-8">
        <img
          src={image}
          alt={name}
          className="w-28 h-28 border border-neutral-500 p-1 bg-green-600 rounded-full"
        />
        <div>
          <h6 className="text-xl font-semibold text-neutral">{name}</h6>
          <p className="text-base text-neutral">{coursetitle}</p>
        </div>
      </div>
    </div>
  );
};
FeedbackCard.propTypes = {
  reviews: PropTypes.object,
};
export default FeedbackCard;
