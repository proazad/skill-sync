import { FaLocationDot, FaRegClock } from "react-icons/fa6";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import './styles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import useAllEvents from "../../Hooks/useAllEvents";
import PropTypes from "prop-types";
const UpcomingSlider = ({ item, cssClass }) => {
  const [events] = useAllEvents();
  return (
    <Swiper
      slidesPerView={item}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className={`${cssClass} lg:p-2`}
    >
      {events?.map((event) => (
        <SwiperSlide
          key={event._id}
          className="border rounded-md select-none group shadow"
        >
          <div className="relative overflow-hidden">
            <img
              src={event.image}
              alt=""
              className="w-full rounded-t-md transition duration-300 group-hover:scale-125 delay-300"
              draggable="false"
            />
          </div>
          <div className="p-3">
            <h2 className="text-lg font-bold text-neutral hover:text-green-600 transition duration-300">
              {event.title}
            </h2>
            <div className="flex justify-between flex-wrap my-3">
              <p className="flex gap-1 items-center text-xs">
                <FaRegClock className="text-green-600" />
                {event.datetime}
              </p>
              <p className="flex gap-1 items-center text-xs">
                <FaLocationDot className="text-green-600" />
                {event.place}
              </p>
            </div>
            <p className="text-neutral text-sm">{event.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
UpcomingSlider.propTypes = {
  item: PropTypes.number,
  cssClass: PropTypes.string,
};
export default UpcomingSlider;
