import axios, { AxiosResponse } from "axios";

export interface AxiosRequestConfig {
    baseUrl: string,
}

export enum APIStatus { IDLE, PENDING, REJECTED, FULFILLED }

export type APIError = {
    message: string,
    code: number,
}

export type APIData = {
    status: APIStatus,
    error?: APIError,
}

export const InternalError = {
    message: "Internal Error, try again",
    code: -500,
}

export const onfulfilledRequest = (response: AxiosResponse) => response;
export const onRejectedResponse = (): any => Promise.reject(InternalError);


export const ApiBaseURL = axios.create({
    baseURL: 'https://fakestoreapi.com'
});

ApiBaseURL.interceptors.response.use(onfulfilledRequest, onRejectedResponse);
