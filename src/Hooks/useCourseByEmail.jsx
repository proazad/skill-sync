import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";

const useCourseByEmail = () => {
  const axiosPrivate = useAxiosPrivate();
  const { user,loading } = useAuth();
  const {
    data: mycourses = [],
    isPending,
    refetch
  } = useQuery({
    queryKey: [user?.email,"mycourses"],
    enabled: !loading && !!localStorage.getItem("access_token"),
    queryFn: async () => {
      const res = await axiosPrivate.get(`/courses/${user.email}`);
      return res.data;
    },
  });
  return [mycourses, isPending, refetch];
};

export default useCourseByEmail;
