import axios from "axios";
import { toast } from "@/components/ui/use-toast";

export const request = axios.create({
  baseURL: "http://localhost:1337/api",
});

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log(token, "token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    }
  },
  (error) => {
    let errorMessage = error.response.data.error.message;
    if (error.response.status === 400) {
      errorMessage = "帐号或者密码不正确";
    }
    toast({
      description: errorMessage,
      variant: "destructive",
      duration: 3000,
    });
    return Promise.reject(error);
  },
);
