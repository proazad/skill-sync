import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useAllEvents = () => {
  const axiosPublic = useAxiosPublic();
  const {user} = useAuth();
  const {
    data: events = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: [user?.email,"events"],
    queryFn: async () => {
      const res = await axiosPublic.get("/events");
      return res.data;
    },
  });
  return [events, isPending, refetch];
};

export default useAllEvents;
