import Banner from "../../Components/Banner/Banner";
import BecomeMentor from "../../Components/BecomeMentor/BecomeMentor";
import FeaturedCourse from "../../Components/FeaturedCourse/FeaturedCourse";
import HelmetTitle from "../../Components/HelmetTitle/HelmetTitle";
import OurInstructors from "../../Components/OurInstructors/OurInstructors";
import Partners from "../../Components/Partners/Partners";
import ReviewSection from "../../Components/ReviewSection/ReviewSection";
import StatisticsSection from "../../Components/StatisticsSection/StatisticsSection";
import UpcomingEvents from "../../Components/UpcomingEvents/UpcomingEvents";

const Home = () => {
  return (
    <>
      <HelmetTitle title={"HOME"} />
      <Banner />
      <FeaturedCourse />
      <Partners />
      <ReviewSection />
      <StatisticsSection />
      <OurInstructors />
      <BecomeMentor />
      <UpcomingEvents />
    </>
  );
};

export default Home;
