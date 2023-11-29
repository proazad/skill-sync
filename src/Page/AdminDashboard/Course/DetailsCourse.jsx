import { useParams } from "react-router-dom";
import useSingleCourse from "../../../Hooks/useSingleCourse";

const DetailsCourse = () => {
  const { id } = useParams();
  const [course] = useSingleCourse(id);
  console.log(course);
  return (
    <div>
      <h2 className="text-4xl">Course Details </h2>
    </div>
  );
};

export default DetailsCourse;
