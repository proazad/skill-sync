import { useParams } from "react-router-dom";
import useStudent from "../../../Hooks/useStudent";

const StudentDetails = () => {
  const { id } = useParams();
  const [student] = useStudent(id);
  const {
    name,
    image,
    email,
    enrolledCourseId,
    fathersName,
    mothersName,
    phoneNumber,
    completedCourseId,
  } = student;
  return (
    <div className="px-5 lg:px-10 my-10">
      <div className="border p-4">
        <div className="flex gap-5 items-center mb-5">
          <img src={image} className="w-40 rounded-md" alt="" />
          <div className="">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <h2 className="text-base">Email: {email}</h2>
            <h2 className="text-base">Phone: {phoneNumber}</h2>
          </div>
        </div>
        <div className=" divider"></div>
        <div className=" my-5">
          <h2 className="text-xl font-semibold">Personal Information:</h2>
          <div className="my-3">
            <p>
              <span className="font-medium">Father&apos;s Name: </span>
              {fathersName}
            </p>
            <p>
              <span className="font-medium">Mother&apos;s Name: </span>
              {mothersName}
            </p>
            
          </div>
        </div>
        <div className=" divider"></div>
        <div className=" my-5">
          <h2 className="text-xl font-semibold">Academic Information:</h2>
          <div className="my-3">
          <p>
              <span className="font-medium">Running Course: </span>
              {enrolledCourseId}
            </p>
            <p>
              <span className="font-medium">Completed Course: </span>
              {completedCourseId}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
