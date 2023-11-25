import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllMentors = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: instructors = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await axiosPublic.get("/mentors");
      return res.data;
    },
  });
  return [instructors, loading, refetch];
};

export default useAllMentors;
