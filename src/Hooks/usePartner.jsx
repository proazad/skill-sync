import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePartner = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: partners = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["partners"],
    queryFn: async () => {
      const res = await axiosPublic.get("/partners");
      return res.data;
    },
  });
  return [partners, loading, refetch];
};

export default usePartner;
