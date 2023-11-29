import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const usePartner = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const {
    data: partners = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: [user?.email, "partners"],
    queryFn: async () => {
      const res = await axiosPublic.get("/partners");
      return res.data;
    },
  });
  return [partners, isPending, refetch];
};

export default usePartner;
