import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useSingleCourse = (id) => {
  const axiosPublic = useAxiosPublic();
  const { user} = useAuth();
  const {
    data: course,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["singlecourse"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/courses/single/${id}`);
      return res.data;
    },
  });
  return [course, isPending, refetch];
};

export default useSingleCourse;
