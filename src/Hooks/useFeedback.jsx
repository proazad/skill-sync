import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFeedback = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: reviews = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/feedback");
      return res.data;
    },
  });
  return [reviews, isPending, refetch];
};

export default useFeedback;
