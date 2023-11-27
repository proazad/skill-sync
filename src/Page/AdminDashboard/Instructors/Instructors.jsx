import { Link } from "react-router-dom";
import useAllInstructor from "../../../Hooks/useAllInstructor";

const Instructors = () => {
  const [instructors] = useAllInstructor();
  return (
    <div>
      <h2 className="text-4xl">All Instructors {instructors.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Experties</th>
              <th>Course</th>
              <th>Students</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {instructors?.map(({ _id, name, image, email,courses,expertise,students }, index) => (
              <tr key={_id}>
                <th>{index + 1}</th>
                <td>
                  <img src={image} className="w-14" alt={name} />
                </td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{expertise}</td>
                <td>{courses}</td>
                <td>{students}</td>
                <td>
                  <Link
                    to={`/admin/instructor/${_id}`}
                    className="btn btn-primary btn-sm"
                  >
                    Detials
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Instructors;
