// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import './styles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import usePartner from "../../Hooks/usePartner";
import PropTypes from "prop-types";
const ParnterSlider = ({ item, cssClass }) => {
  const [partners] = usePartner();
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
      className={`${cssClass}`}
    >
      {partners?.map((partner, index) => (
        <SwiperSlide
          key={index}
          className="h-full select-none border p-5 rounded-md"
        >
          <div className="h-44">
            <img src={partner.image} alt={partner.name} className="w-full" />
          </div>
          <div className="text-center my-4">
            <h2 className="text-xl font-semibold">{partner.name}</h2>
            <h2 className="text-base text-neutral">
              {partner.description.slice(0, 65)}
            </h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
ParnterSlider.propTypes = {
  item: PropTypes.number,
  cssClass: PropTypes.string,
};
export default ParnterSlider;
