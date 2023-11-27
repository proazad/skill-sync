import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const useTeacherRequest = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: teacherRequest = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["teacherRequest"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users/wantinstructor");
      return res.data;
    },
  });
  return [teacherRequest, loading, refetch];
};

export default useTeacherRequest;
