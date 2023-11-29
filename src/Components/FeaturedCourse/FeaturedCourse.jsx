import SectionHead from "../SectionHead/SectionHead";
import FeatSlider from "./FeatSlider";
const FeaturedCourse = () => {
  return (
    <section className="container mx-auto px-2 md:px-5 xl:px-0">
      <SectionHead
        subtitle={"POPULAR COURSES"}
        titlep1={"Choose Our"}
        titlep2={"Top Courses"}
      />
      <FeatSlider item={3} cssClass={"hidden lg:grid grid-cols-1 grid-cols-3"} />
      <div className="hidden sm:block">

      <FeatSlider item={2} cssClass={"grid lg:hidden grid-cols-1 grid-cols-3"} />
      </div>
      <FeatSlider item={1} cssClass={"grid sm:hidden grid-cols-1 grid-cols-3"} />
    </section>
  );
};

export default FeaturedCourse;
