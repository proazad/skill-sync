import { Link } from "react-router-dom";
import useAllCourse from "../../../Hooks/useAllCourse";

const Course = () => {
  const [courses] = useAllCourse();
  const approvedCourse = courses?.filter(
    (course) => course.isApproved === true
  );
  return (
    <div>
      <h2 className="text-4xl">All Courses: {approvedCourse.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Student</th>
              <th>Mentor</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {approvedCourse?.map(
              ({ _id, title, price, enrolled, image, mentor }, index) => (
                <tr key={_id}>
                  <th>{index + 1}</th>
                  <td>
                    <img src={image} className="w-14" alt={title} />
                  </td>
                  <td>{title}</td>
                  <td>${price}</td>
                  <td>{enrolled}</td>
                  <td>{mentor}</td>
                  <td>
                    <Link
                      to={`/admin/student/${_id}`}
                      className="btn btn-primary btn-sm"
                    >
                      Detials
                    </Link>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Course;
