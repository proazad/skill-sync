import { useParams } from "react-router-dom";
import useSingleCourse from "../../Hooks/useSingleCourse";

const AssinmentPage = () => {
  const { id } = useParams();
  const [course] = useSingleCourse(id);
  return (
    <div>
      <h2 className="text-2xl text-green-600">{course.title}</h2>
      <h3 className="text-base">All Assinment: </h3>
    </div>
  );
};

export default AssinmentPage;
