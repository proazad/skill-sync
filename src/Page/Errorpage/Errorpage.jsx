import HelmetTitle from "../../Components/HelmetTitle/HelmetTitle";

const Errorpage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <HelmetTitle title={"404 PAGE"} />
      <h2 className="text-5xl lg:text-9xl font-bold">
        4<span className="text-green-600 text-4xl lg:text-8xl">.o.</span>4!
      </h2>
      <h2 className="text-4xl font-bold">Not Found</h2>
    </div>
  );
};

export default Errorpage;
