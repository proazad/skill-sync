import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useAllCourse = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const {
    data: courses = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: [user?.email, "courses"],
    queryFn: async () => {
      const res = await axiosPublic.get("/courses");
      return res.data;
    },
  });
  return [courses, isPending, refetch];
};

export default useAllCourse;
