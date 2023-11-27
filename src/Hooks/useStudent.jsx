import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useStudent = (id) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: student = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["student"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/role/student/${id}`);
      return res.data;
    },
  });
  return [student, loading, refetch];
};

export default useStudent;
