import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IApiError } from './Types/Error';

const baseURL = 'http://localhost:3000/api';

const fetch = async <T>(options: AxiosRequestConfig): Promise<T> => {
  try {
    const { data }: AxiosResponse<T> = await axios(options);

    return data;
  } catch (error) {
    // Handle Network Error
    if (error.isAxiosError && !error.response) {
      return Promise.reject(error);
    }

    const apiError: IApiError = error.response?.data;

    return Promise.reject(apiError || new Error('Unrecognized api error'));
  }
};

export const get = <T = any>(url: string) =>
  fetch<T>({
    url,
    baseURL,
  });

export const post = <T = any>(
  url: string,
  data: object,
  options?: AxiosRequestConfig,
) =>
  fetch<T>({
    ...options,
    url,
    method: 'POST',
    data,
    baseURL,
  });

export const put = <T = any>(url: string, data: object) =>
  fetch<T>({
    url,
    method: 'PUT',
    data,
    baseURL,
  });

export const del = <T = any>(url: string) =>
  fetch<T>({
    url,
    method: 'DELETE',
    baseURL,
  });
