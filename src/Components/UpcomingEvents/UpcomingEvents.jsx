import SectionHead from "../SectionHead/SectionHead";
import UpcomingSlider from "./UpcomingSlider";
const UpcomingEvents = () => {
  return (
    <div className="container mx-auto px-2 md:px-5 xl:px-0 my-10">
      <SectionHead
        subtitle={"UPCOMING EVENTS"}
        titlep1={"Join With"}
        titlep2={"Our Events"}
      />
      <UpcomingSlider
        item={3}
        cssClass={"hidden lg:grid grid-cols-1 grid-cols-3"}
      />
      <div className="hidden sm:block">
        <UpcomingSlider item={2} cssClass={"grid lg:hidden  grid-cols-1 grid-cols-3"} />
      </div>
      <UpcomingSlider
        item={1}
        cssClass={"grid sm:hidden grid-cols-1 grid-cols-3"}
      />
    </div>
  );
};

export default UpcomingEvents;
