import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useStudent = (id) => {
  const axiosPublic = useAxiosPublic();
  const { user, loading } = useAuth();
  const {
    data: student = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: [user?.email, "student"],
    enabled: !loading && !!localStorage.getItem("access_token"),
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/role/student/${id}`);
      return res.data;
    },
  });
  return [student, isPending, refetch];
};

export default useStudent;
