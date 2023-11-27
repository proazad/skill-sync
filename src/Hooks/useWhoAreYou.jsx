import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useWhoAreYou = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const {
    data: whoareyou,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["whoareyou"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user.email}`);
      return res.data;
    },
  });
  return [whoareyou, isLoading, refetch];
};

export default useWhoAreYou;
