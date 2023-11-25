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
import SectionHead from "../SectionHead/SectionHead";
const FeaturedCourse = () => {
  const [courses] = useAllCourse();
  const featured = courses
    .sort((courseA, courseB) => courseB.enrolled - courseA.enrolled)
    .slice(0, 6);

  return (
    <section className="px-10 my-16">
      <SectionHead
        subtitle={"POPULAR COURSES"}
        titlep1={"Choose Our"}
        titlep2={"Top Courses"}
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
        {featured?.map((course) => (
          <SwiperSlide key={course._id}>
            <FeaturedCard course={course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeaturedCourse;
