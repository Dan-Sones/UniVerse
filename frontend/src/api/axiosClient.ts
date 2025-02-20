import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const axiosClient = (() => {
  return axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
  });
})();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const request = async (options: AxiosRequestConfig, payload?: any) => {
  const onSuccess = (response: AxiosResponse) => {
    const { data } = response;
    return data;
  };

  const onError = function (error: AxiosError) {
    return Promise.reject({
      message: error.message,
      code: error.code,
      response: error.response,
    });
  };
  return axiosClient({
    ...options,
    data: payload,
  })
    .then(onSuccess)
    .catch(onError);
};
