import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";

const useCourseByEmail = () => {
  const axiosPrivate = useAxiosPrivate();
  const { user } = useAuth();
  const {
    data: mycourses = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["mycourses"],
    queryFn: async () => {
      const res = await axiosPrivate.get(`/courses/${user.email}`);
      return res.data;
    },
  });
  return [mycourses, loading, refetch];
};

export default useCourseByEmail;
