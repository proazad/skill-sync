import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";

const useAllUsers = () => {
  const axiosPrivate = useAxiosPrivate();
  const { user, loading } = useAuth();
  const {
    data: users = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: [user?.email, "users"],
    enabled: !loading && !!localStorage.getItem("access_token"),
    queryFn: async () => {
      const res = await axiosPrivate.get("/users");
      return res.data;
    },
  });
  return [users, isPending, refetch];
};

export default useAllUsers;
