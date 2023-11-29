import { useParams } from "react-router-dom";
import useSingleCourse from "../../Hooks/useSingleCourse";

const UpdateCourse = () => {
  const { id } = useParams();
  const [course] = useSingleCourse(id);
  console.log(course);
  return <div></div>;
};

export default UpdateCourse;
