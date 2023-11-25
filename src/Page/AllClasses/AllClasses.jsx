import FeaturedCard from "../../Components/FeaturedCard/FeaturedCard";
import HelmetTitle from "../../Components/HelmetTitle/HelmetTitle";
import useAllCourse from "../../Hooks/useAllCourse";

const AllClasses = () => {
  const [courses] = useAllCourse();
  return (
    <section className="container mx-auto">
      <HelmetTitle title={"ALL CLASSES"} />
      <h1 className="text-4xl font-bold mt-16 mb-5">All Courses</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {courses?.map((course) => (
          <FeaturedCard key={course._id} course={course} />
        ))}
        
      </div>
    </section>
  );
};

export default AllClasses;
