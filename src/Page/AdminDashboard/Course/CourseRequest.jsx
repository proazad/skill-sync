import Swal from "sweetalert2";
import useAllCourse from "../../../Hooks/useAllCourse";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";

const CourseRequest = () => {
  const axiosPrivate = useAxiosPrivate();
  const [courses, , refetch] = useAllCourse();
  const pendingCourse = courses?.filter(
    (course) => course.isApproved === false
  );
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
              ({ _id, title, price, image, mentor, isreject }, index) => (
                <tr key={_id}>
                  <th>{index + 1}</th>
                  <td>
                    <img src={image} className="w-14" alt={title} />
                  </td>
                  <td>{title}</td>
                  <td>${price}</td>
                  <td>{mentor}</td>
                  <td>
                    {isreject ? (
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
                    {isreject ? (
                      <button className="btn btn-error btn-sm" disabled>
                        Cenceled
                      </button>
                    ) : (
                      <button
                        onClick={() => handleCourseCencel(_id)}
                        className="btn btn-error btn-sm"
                      >
                        Cencel
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
