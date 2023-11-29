import { Swiper, SwiperSlide } from "swiper/react";
import useAllCourse from "../../Hooks/useAllCourse";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import './styles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import PropTypes from "prop-types";
const FeatSlider = ({ item, cssClass }) => {
  const [courses] = useAllCourse();
  const filter = courses?.filter((course) => course.isApproved === true);
  const featured = filter
    ?.sort((courseA, courseB) => courseB.enrolled - courseA.enrolled)
    .slice(0, 6);
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
      className={`mySwiper ${cssClass}`}
    >
      {featured?.map((course) => (
        <SwiperSlide key={course._id}>
          <FeaturedCard course={course} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
FeatSlider.propTypes = {
  item: PropTypes.number,
  cssClass: PropTypes.string,
};
export default FeatSlider;
