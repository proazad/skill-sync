import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllStudents = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: students = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["students"],
    queryFn: async () => {
      const res = await axiosPublic.get("/students");
      return res.data;
    },
  });
  return [students, loading, refetch];
};

export default useAllStudents;
