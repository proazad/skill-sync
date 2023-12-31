import CourseCard from "../../Components/CourseCard/CourseCard";
import HelmetTitle from "../../Components/HelmetTitle/HelmetTitle";
import useAllCourse from "../../Hooks/useAllCourse";

const AllClasses = () => {
  const [courses] = useAllCourse();
  const filter = courses?.filter((course) => course.isApproved === true);
  return (
    <section className="container mx-auto">
      <HelmetTitle title={"ALL CLASSES"} />
      <h1 className="text-4xl font-bold mt-16 mb-5">All Classes</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {filter?.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default AllClasses;
