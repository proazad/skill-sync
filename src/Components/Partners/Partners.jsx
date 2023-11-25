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
import SectionHead from "../SectionHead/SectionHead";

const Partners = () => {
  const [partners] = usePartner();
  return (
    <section className="container mx-auto py-10">
      <SectionHead
        subtitle={"Our Partners"}
        titlep1={"Community"}
        titlep2={"Makes Unity"}
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
        className="mySwiper grid grid-cols-1 lg:grid-cols-4"
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
    </section>
  );
};

export default Partners;
