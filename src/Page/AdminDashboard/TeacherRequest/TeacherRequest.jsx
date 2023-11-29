import Swal from "sweetalert2";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import useAllUsers from "../../../Hooks/useAllUsers";

const TeacherRequest = () => {
  const [users, , refetch] = useAllUsers();
  const instructors = users?.filter(
    (instructor) => instructor.IswantInstructor === true
  );
  const axiosPrivate = useAxiosPrivate();
  const handleMakeAdmin = (id) => {
    axiosPrivate.put(`/users/instructor/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Now He/She is an Instructor",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };
  const handleRequestReject = (id) => {
    axiosPrivate.put(`/users/instructor/requestreject/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Instructor Request Rejected",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };
  return (
    <div>
      <h2 className="text-4xl">
        All Teacher Request : {instructors.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Reject Request</th>
            </tr>
          </thead>
          <tbody>
            {instructors?.map(
              ({ _id, name, image, email, requestReject }, index) => (
                <tr key={_id}>
                  <th>{index + 1}</th>
                  <td>
                    <img src={image} className="w-14" alt={name} />
                  </td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                    {requestReject ? (
                      <button className="btn btn-primary btn-sm" disabled>
                        Make an Admin
                      </button>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(_id)}
                        className="btn btn-primary btn-sm"
                      >
                        Make an Admin
                      </button>
                    )}
                  </td>
                  <td>
                    {requestReject ? (
                      <button className="btn btn-error btn-sm" disabled>
                        Reject
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRequestReject(_id)}
                        className="btn btn-error btn-sm"
                      >
                        Reject
                      </button>
                    )}
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

export default TeacherRequest;
