import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";

const useSinglePost = (id) => {
  const axiosPrivate = useAxiosPrivate();
  const { user, loading } = useAuth();
  const { data, isPending, refetch } = useQuery({
    queryKey: [user?.email, "singlecourse"],
    enabled: !loading && !!localStorage.getItem("access_token"),
    queryFn: async () => {
      const res = await axiosPrivate.get(`/courses/${id}`);
      return res.data;
    },
  });
  return [data, isPending, refetch];
};

export default useSinglePost;
