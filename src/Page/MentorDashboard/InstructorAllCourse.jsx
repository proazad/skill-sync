import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import useCourseByEmail from "../../Hooks/useCourseByEmail";

const InstructorAllCourse = () => {
  const [mycourses, , refetch] = useCourseByEmail();
  const axiosPrivate = useAxiosPrivate();

  const handleDeleteCourse = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPrivate.delete(`/courses/del/${id}`).then((res) => {
          if (res.data.deletedCount === 1) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
          refetch();
        });
      }
    });
  };
  return (
    <div className="my-10">
      <h2 className="text-4xl">
        Your All Course: {mycourses.length > 0 ? mycourses.length : 0}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Details</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {mycourses?.map(
              ({ _id, title, image, email, isApproved, isreject }, index) => (
                <tr key={_id}>
                  <th>{index + 1}</th>
                  <td>
                    <img src={image} className="w-14" alt={title} />
                  </td>
                  <td>{title}</td>
                  <td>{email}</td>
                  <td>
                    {isApproved && !isreject && (
                      <span className="text-green-600 px-2 py-2 rounded-md font-semibold">
                        Accepted
                      </span>
                    )}
                    {isApproved === false && (
                      <span className="text-amber-400  px-2 py-2 rounded-md font-semibold">
                        Pending
                      </span>
                    )}
                    {isreject && isApproved === false && (
                      <span className="text-amber-400  px-2 py-2 rounded-md font-semibold">
                        Rejected
                      </span>
                    )}
                  </td>
                  <td>
                    {isApproved ? (
                      <Link
                        to={`/instructor/course/details/${_id}`}
                        className="btn btn-info btn-sm"
                      >
                        Details
                      </Link>
                    ) : (
                      <button className="btn btn-info btn-sm" disabled>
                        Details
                      </button>
                    )}
                  </td>
                  <td>
                    <Link
                      to={`/instructor/course/${_id}`}
                      className="btn btn-info btn-sm"
                    >
                      Update
                    </Link>
                  </td>
                  <td>
                    {isApproved ? (
                      <button className="btn btn-error btn-sm" disabled>
                        delete
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDeleteCourse(_id)}
                        className="btn btn-error btn-sm"
                      >
                        delete
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

export default InstructorAllCourse;
