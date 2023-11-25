import { Swiper, SwiperSlide } from "swiper/react";
import SectionHead from "../SectionHead/SectionHead";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import './styles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import useFeedback from "../../Hooks/useFeedback";
import FeedbackCard from "../FeedbackCard/FeedbackCard";
const ReviewSection = () => {
  const [reviews] = useFeedback();
  return (
    <div className="px-10 my-16">
      <SectionHead
        subtitle={"TESTIMONIAL"}
        titlep1={"What Says"}
        titlep2={"Our Students"}
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper grid grid-cols-1 lg:grid-cols-1 gap-5"
      >
        {reviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <FeedbackCard reviews={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSection;
