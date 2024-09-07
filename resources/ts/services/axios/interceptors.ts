import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import router from '@/router';
import type { ResponseErrors } from '@/stores/app';

type IRequestConfig = InternalAxiosRequestConfig & AxiosRequestConfig;
const onRequest = (config: IRequestConfig): IRequestConfig => {
  // if (token) {
  //   config.headers['Authorization'] = 'Bearer ' + token;
  // }
  const appStore = useAppStore();
  if (Object.keys(appStore.errors).length > 0) {
    appStore.setErrors({});
  }
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  if (env('DEV')) console.error(`[request error]`, error); // eslint-disable-line no-console
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  const appStore = useAppStore();
  if (Object.keys(appStore.errors).length > 0) {
    appStore.setErrors({});
  }
  return response;
};

const onResponseError = async (error: AxiosError<ResponseErrors>): Promise<AxiosError> => {
  const { response } = error;
  const data = response?.data;
  if (data) {
    switch (response.status) {
      case HttpStatus.HTTP_UNAUTHORIZED: {
        router.replace({ path: '/login' }).then();
        break;
      }
      case HttpStatus.HTTP_UNPROCESSABLE_ENTITY: {
        const appStore = useAppStore();
        if (data?.errors) {
          appStore.setErrors(data.errors);
        }
        break;
      }
    }
  }
  if (env('DEV')) console.error(`[response error]`, error); // eslint-disable-line no-console
  throw error;
};

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
