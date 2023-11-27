import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "./useAxiosPrivate";

const useCourseRequest = () => {
  const axiosPrivate = useAxiosPrivate();
  const {
    data: coursesreq = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["coursesreq"],
    queryFn: async () => {
      const res = await axiosPrivate.get("/courses/request");
      return res.data;
    },
  });
  return [coursesreq, loading, refetch];
};

export default useCourseRequest;
