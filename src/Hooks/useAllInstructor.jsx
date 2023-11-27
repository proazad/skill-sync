import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllInstructor = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: instructors = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users/role/instructor");
      return res.data;
    },
  });
  return [instructors, loading, refetch];
};
export default useAllInstructor;
