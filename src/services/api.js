import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const onSuccess = (response) => {
  return response.data;
};

const onError = (error) => {
  return error;
};

api.interceptors.response.use(onSuccess, onError);

export { api };
