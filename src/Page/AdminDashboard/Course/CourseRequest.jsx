import Swal from "sweetalert2";
import useAllCourse from "../../../Hooks/useAllCourse";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";

const CourseRequest = () => {
  const axiosPrivate = useAxiosPrivate();
  const [courses, , refetch] = useAllCourse();
  const pendingCourse = courses?.filter(
    (course) => course.isApproved === false
  );

  // Course Approve
  const handleCourseApprove = (id) => {
    axiosPrivate.put(`courses/approve/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Course Approved",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  // Course Cancel
  const handleCourseCencel = (id) => {
    axiosPrivate.put(`/courses/cancel/${id}`).then((res) => {
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
      <h2 className="text-4xl">All Course Request: {pendingCourse.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Mentor</th>
              <th>Approve</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {pendingCourse?.map(
              ({ _id, title, price, image, mentor, isrejected }, index) => (
                <tr key={_id}>
                  <th>{index + 1}</th>
                  <td>
                    <img src={image} className="w-14" alt={title} />
                  </td>
                  <td>{title}</td>
                  <td>${price}</td>
                  <td>{mentor}</td>
                  <td>
                    {isrejected ? (
                      <button className="btn btn-success btn-sm" disabled>
                        Approve
                      </button>
                    ) : (
                      <button
                        onClick={() => handleCourseApprove(_id)}
                        className="btn btn-success btn-sm"
                      >
                        Approve
                      </button>
                    )}
                  </td>
                  <td>
                    {isrejected ? (
                      <span className="bg-error px-2 py-1 rounded-md font-semibold">
                        Rejected
                      </span>
                    ) : (
                      <button
                        onClick={() => handleCourseCencel(_id)}
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

export default CourseRequest;
