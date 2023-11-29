import { Link } from "react-router-dom";
import useCourseByEmail from "../../Hooks/useCourseByEmail";

const InstructorAllCourse = () => {
  const [mycourses] = useCourseByEmail();
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
              <th>Action</th>
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
                        Approved
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
                    <Link
                      to={`/instructor/course/${_id}`}
                      className="btn btn-error btn-sm"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    {isApproved ? (
                      <button className="btn btn-error btn-sm" disabled>
                        delete
                      </button>
                    ) : (
                      <button className="btn btn-error btn-sm">delete</button>
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
