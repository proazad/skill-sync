import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useFeedback = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const {
    data: reviews = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: [user?.email, "reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/feedback");
      return res.data;
    },
  });
  return [reviews, isPending, refetch];
};

export default useFeedback;
