import { useParams } from "react-router-dom";
import useSinglePost from "../../Hooks/useSinglePost";

const UpdateCourse = () => {
  const { id } = useParams();
  const [data] = useSinglePost(id);
  console.log(data);
  return <div></div>;
};

export default UpdateCourse;
