import Banner from "../../Components/Banner/Banner";
import FeaturedCourse from "../../Components/FeaturedCourse/FeaturedCourse";
import HelmetTitle from "../../Components/HelmetTitle/HelmetTitle";
import Partners from "../../Components/Partners/Partners";
import ReviewSection from "../../Components/ReviewSection/ReviewSection";
import StatisticsSection from "../../Components/StatisticsSection/StatisticsSection";

const Home = () => {
  return (
    <>
      <HelmetTitle title={"HOME"} />
      <Banner />
      <Partners />
      <FeaturedCourse />
      <ReviewSection />
      <StatisticsSection />
    </>
  );
};

export default Home;
