import Banner from "../../Components/Banner/Banner";
import BecomeMentor from "../../Components/BecomeMentor/BecomeMentor";
import FeaturedCourse from "../../Components/FeaturedCourse/FeaturedCourse";
import Footer from "../../Components/Footer/Footer";
import HelmetTitle from "../../Components/HelmetTitle/HelmetTitle";
import OnePlatfrom from "../../Components/OnePlatform/OnePlatfrom";
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
      <OnePlatfrom/>
      <OurInstructors />
      <BecomeMentor />
      <UpcomingEvents />
      <Footer />
    </>
  );
};

export default Home;
