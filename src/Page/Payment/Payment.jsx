import { CiFaceSmile } from "react-icons/ci";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import useSingleCourse from "../../Hooks/useSingleCourse";
import useWhoAreYou from "../../Hooks/useWhoAreYou";
const Payment = () => {
  const { id } = useParams();
  const [course, , refetch] = useSingleCourse(id);
  const [whoareyou, isLoading] = useWhoAreYou();
  const axiosPrivate = useAxiosPrivate();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <progress className="progress progress-success w-56 h-5"></progress>
      </div>
    );
  }
  if (whoareyou?.role !== "student") {
    return (
      <section className="h-screen flex flex-col items-center justify-center">
        <CiFaceSmile className="text-7xl text-rose-700" />
        <p>If you want to Pay ! You can pay in my Wallet</p>
      </section>
    );
  }

  const checkingduplicate = whoareyou?.enrolledCourseId.includes(id);

  const handlePayment = (course) => {
    const studentinfo = {
      enrolledCourseId: course._id,
      studentTotalPayment: course.price,
    };

    axiosPrivate
      .put(`/users/enroll/${whoareyou._id}`, studentinfo)
      .then((res) => {
        if (res.data.modifiedCount === 1) {
          axiosPrivate
            .put(`/users/teacher/${course.mentorId}`, { student: 1 })
            .then((res) => {
              refetch();
              if (res.data.modifiedCount === 1) {
                axiosPrivate.put(`/courses/enroll/${id}`, {
                    enroll: 1,
                }).then((res)=>{
                    if(res.data.modifiedCount===1){
                        console.log(res.data);
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Congrates Enrollment Successfull",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          refetch();
                    }
                })
              }
            });
        }
      });
  };
  return (
    <section className="h-screen flex items-center justify-center">
      {checkingduplicate ? (
        <button className="btn btn-success">Pay : ${course.price}</button>
      ) : (
        <button
          onClick={() => handlePayment(course)}
          className="btn btn-success"
        >
          Pay : ${course.price}
        </button>
      )}
    </section>
  );
};

export default Payment;
