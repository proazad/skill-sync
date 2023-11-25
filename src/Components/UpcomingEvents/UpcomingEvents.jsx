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
import SectionHead from "../SectionHead/SectionHead";
const UpcomingEvents = () => {
  const [events] = useAllEvents();
  console.log(events);
  return (
    <div className="px-10 my-16">
      <SectionHead
        subtitle={"UPCOMING EVENTS"}
        titlep1={"Join With Us"}
        titlep2={"Our Events"}
      />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper grid grid-cols-1 lg:grid-cols-3 gap-5"
      >
        {events?.map((event) => (
          <SwiperSlide
            key={event._id}
            className="rounded-md border border-green-600"
          >
            <div className="relative">
              <img
                src={event.image}
                alt=""
                className="rounded-t-md"
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
    </div>
  );
};

export default UpcomingEvents;
