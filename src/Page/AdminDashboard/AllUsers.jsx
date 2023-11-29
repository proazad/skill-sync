import Swal from "sweetalert2";
import useAllUsers from "../../Hooks/useAllUsers";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";

const AllUsers = () => {
  const [users, , refetch] = useAllUsers();
  const axiosPrivate = useAxiosPrivate();
  const handleMakeAdmin = (id, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPrivate.put(`/users/admin/${id}`).then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              title: "Success!",
              text: `${name} is now Admin`,
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <h2 className="text-4xl">All Users {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users?.map(({ _id, name, image, email, role }, index) => (
              <tr key={_id}>
                <th>{index + 1}</th>
                <td>
                  <img src={image} className="w-14" alt={name} />
                </td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{role}</td>
                <td>
                  {role === "admin" || role === "moderator" ? (
                    <button className="btn btn-primary btn-sm" disabled>
                      Make Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(_id, name)}
                      className="btn btn-primary btn-sm"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
