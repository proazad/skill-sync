import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSingleCourse = (id) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: course={},
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
