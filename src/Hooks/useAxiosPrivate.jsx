import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosPrivate = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://skillsync-server.vercel.app",
});
const useAxiosPrivate = () => {
  const navigate = useNavigate();
  const { userLogOut } = useAuth();
  axiosPrivate.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access_token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axiosPrivate.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        await userLogOut();
        navigate("/signin");
      }
      return Promise.reject(error);
    }
  );
  return axiosPrivate;
};

export default useAxiosPrivate;
