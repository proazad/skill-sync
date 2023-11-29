import SectionHead from "../SectionHead/SectionHead";
import ParnterSlider from "./ParnterSlider";

const Partners = () => {
  return (
    <section className="container mx-auto px-2 md:px-5 xl:px-0 my-10">
      <SectionHead
        subtitle={"Our Partners"}
        titlep1={"Community"}
        titlep2={"Makes Unity"}
      />
      <ParnterSlider
        item={3}
        cssClass={"hidden lg:grid grid-cols-1 grid-cols-3"}
      />
      <div className="hidden sm:block">
        <ParnterSlider item={2} cssClass={"grid grid-cols-1 grid-cols-3"} />
      </div>
      <ParnterSlider
        item={1}
        cssClass={"grid sm:hidden grid-cols-1 grid-cols-3"}
      />
    </section>
  );
};

export default Partners;
