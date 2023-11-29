import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllCourse = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: courses = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axiosPublic.get("/courses");
      return res.data;
    },
  });
  return [courses, isPending, refetch];
};

export default useAllCourse;
