import Banner from "../../Components/Banner/Banner";
import HelmetTitle from "../../Components/HelmetTitle/HelmetTitle";
import Partners from "../../Components/Partners/Partners";

const Home = () => {
  return (
    <>
      <HelmetTitle title={"HOME"} />
      <Banner />
      <section>
        {/* <Banner /> */}
      <Partners />
      </section>
    </>
  );
};

export default Home;
