import Banner from "../../Components/Banner/Banner";
import HelmetTitle from "../../Components/HelmetTitle/HelmetTitle";

const Home = () => {
  return (
    <div>
      <HelmetTitle title={"HOME"} />
      <Banner />
      <h1 className="text-4xl">Home</h1>
    </div>
  );
};

export default Home;
