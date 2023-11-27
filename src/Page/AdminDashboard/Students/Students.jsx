import { Link } from "react-router-dom";
import useAllStudents from "../../../Hooks/useAllStudents";
const Students = () => {
  const [students] = useAllStudents();

  return (
    <div>
      <h2 className="text-4xl my-5">All Student :{students.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students?.map(({ _id, name, image, email }, index) => (
              <tr key={_id}>
                <th>{index + 1}</th>
                <td>
                  <img src={image} className="w-14" alt={name} />
                </td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                  <Link
                    to={`/admin/student/${_id}`}
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

export default Students;
