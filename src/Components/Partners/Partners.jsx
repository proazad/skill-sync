// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import './styles.css';

// import required modules
import { useEffect, useState } from "react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Partners = () => {
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    fetch("./Partners.json")
      .then((res) => res.json())
      .then((data) => setPartners(data));
  }, []);
  return (
    <section className="container mx-auto py-10">
      <div className="w-full lg:w-7/12 mx-auto lg:my-10 text-center">
        <h2 className="text-3xl lg:text-4xl font-semibold uppercase mb-3">
          Our Partners
        </h2>
        <p className="text-lg">
          Explore and Acknowledge the Collaborative Strengths of Our Trusted and
          Valued Partnerships
        </p>
      </div>
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
        {partners?.map((partner) => (
          <SwiperSlide key={partner.id} className="px-2">
            <div className="h-48">
              <img src={partner.image} alt={partner.companyName} className="w-full"/>
            </div>
            <div className="text-center my-4">
              <h2 className="text-xl font-semibold">{partner.companyName}</h2>
              <h2 className="text-base text-neutral">{partner.description}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Partners;
